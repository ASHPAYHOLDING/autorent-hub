#!/bin/sh
# Runs once on first PostgreSQL container start (empty volume).
# Creates: ashcar_migrator (DDL owner) and ashcar_app (restricted runtime role).
# Passwords come from the environment file — never committed.
set -eu
: "${ASHCAR_MIGRATOR_PASSWORD:?ASHCAR_MIGRATOR_PASSWORD is required}"
: "${ASHCAR_APP_PASSWORD:?ASHCAR_APP_PASSWORD is required}"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
  -v migrator_pw="$ASHCAR_MIGRATOR_PASSWORD" -v app_pw="$ASHCAR_APP_PASSWORD" <<'SQL'
CREATE ROLE ashcar_migrator LOGIN PASSWORD :'migrator_pw' NOSUPERUSER NOCREATEROLE NOCREATEDB NOBYPASSRLS;
CREATE ROLE ashcar_app LOGIN PASSWORD :'app_pw' NOSUPERUSER NOCREATEROLE NOCREATEDB NOBYPASSRLS NOINHERIT;
SELECT format('GRANT CONNECT, CREATE ON DATABASE %I TO ashcar_migrator', current_database()) \gexec
SELECT format('GRANT CONNECT ON DATABASE %I TO ashcar_app', current_database()) \gexec
GRANT USAGE, CREATE ON SCHEMA public TO ashcar_migrator;
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
SQL
