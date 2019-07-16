
# CLI COMMANDS
## Install CLI:
```bash
> npm uninstall -g @angular/cli
> npm cache clean (--force)
> npm install -g @angular/cli@latest
```

## Create & Deploy a New application
```bash
> ng new hello-angular
> cd hello-angular
> ng serve -o
```

## Install Yarn:
```bash
> npm uninstall -g yarn
> npm install -g yarn
```

## Update a package: (package.json)
```bash
> npm install
> ng update
> npm update
```

## Create Component:
```bash
> ng generate component product --flat
```
* flat - won't create sub folder
* ouputs: 
	1. product.component.ts, 
	2. product.component.spec.ts
	3. product.component.html
	4. product.component.css

## Create Service:
```bash
> ng g s product
```
+ g - generate, s - service
+ outputs:
	1. product.service.ts
	2. product.service.spec.ts
