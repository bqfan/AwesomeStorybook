<img src="https://github.com/user-attachments/assets/e60ce50d-e0fa-44cb-8ec0-685e70808ac5" alt="Storybook Web" style="width:50%; height:auto;">
<img src="https://github.com/user-attachments/assets/a0fc1cb3-d3f4-4598-baaf-2f75c56504f4" alt="Storybook iOS" style="width:18%; height:auto;">
<img src="https://github.com/user-attachments/assets/c2f8d6ec-318d-4b59-9ac2-4ac2d442ca13" alt="Storybook Android" style="width:18%; height:auto;">


# getting started

```sh
git clone https://github.com/bqfan/AwesomeStorybook AwesomeStorybook
```

```sh
pnpm install
```

# app

```sh
pnpm start
```

# RN Storybook (ondevice)

In this template you can now run `pnpm storybook` to start ondevice storybook or `pnpm start` to start your expo app.
This works via env variables and expo constants.

```sh
# either
pnpm storybook

# ios
pnpm storybook:ios

# android
pnpm storybook:android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```sh
pnpm storybook-generate
```

# Web

Start react native web storybook:

```
pnpm storybook:web
```

build react native web storybook:

```sh
pnpm build-storybook
```
