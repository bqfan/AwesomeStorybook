![Screenshot 2025-04-25 at 21 48 39](https://github.com/user-attachments/assets/fe985431-b4f9-4cea-9670-d3300f45cabb)
![Simulator Screenshot - iPhone 16 Pro Max - 2025-04-25 at 21 49 59](https://github.com/user-attachments/assets/feba8c1c-6ca5-48cb-a452-0abe5914c693)
![Simulator Screenshot - iPhone 16 Pro Max - 2025-04-25 at 21 50 25](https://github.com/user-attachments/assets/32f1b08a-f3cd-4103-81ec-83ec4f34e8eb)
![Screenshot_1745607057](https://github.com/user-attachments/assets/8e3e5b60-369b-4c86-a4b9-3458c8b5059f)
![Screenshot_1745607063](https://github.com/user-attachments/assets/4d1bc1ec-330e-45c0-a95a-a1333ed30d9c)

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

In this template you can now run `yarn storybook` to start ondevice storybook or `yarn start` to start your expo app.
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
