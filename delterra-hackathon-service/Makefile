DATABASE_NAME = delterra_hackathon

createdb:
	psql -d postgres -c "CREATE DATABASE $(DATABASE_NAME);" || true

.PHONY: createdb