FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=client --prod /prod/client
RUN pnpm deploy --filter=server --prod /prod/server

FROM nginx:latest AS client
COPY --from=build /prod/client/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /prod/client/dist /usr/share/nginx/html


FROM base AS server
COPY --from=build /prod/server /prod/server
WORKDIR /prod/server
EXPOSE 3000
CMD [ "pnpm", "start" ]