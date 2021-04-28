# Argent Test

Get started by installing dependencies!

```
yarn install
```

It should run a `postinstall` command to create the generated files.
If that's not the case, or you want to regenerate them, run:

```
yarn generate
```

Now you can start next.js in dev mode with:

```
yarn dev
```

Or in production mode with:

```
yarn build
yarn start
```

Have fun!

## Troubleshooting

### It crashes with `Object.fromEntries is not a function`

Use a newer Node Version!
Always use the newest LTS (currently v14.\*).
If you are familiar with `nvm`, also see the `.nvmrc` file which comes with this repo!

### It crashes with `Can't resolve '../../types/ethers-contracts'`

Seems like the `postinstall` got blocked! Generate the needed files by running:

```
yarn generate
```

and restart the process!
