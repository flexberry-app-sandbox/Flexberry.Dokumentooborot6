docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborot6-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentooborot6-java/app ../../..
