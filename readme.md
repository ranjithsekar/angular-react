
# CLI COMMANDS
## Install CLI:
```
> npm uninstall -g @angular/cli
> npm cache clean (--force)
> npm install -g @angular/cli@latest
```

## Create & Deploy a New application
```
> ng new hello-angular
> cd hello-angular
> ng serve -open
> ng serve -o
> ng serve --port 4300 -o
```

## Install Yarn:
```
> npm uninstall -g yarn
> npm install -g yarn
```

## Update a package: (package.json)
```
> npm install
> ng update
> npm update
```

## Create Component:
```
> ng generate component product --flat
```
* flat - won't create sub folder
* ouputs: 
	1. product.component.ts, 
	2. product.component.spec.ts
	3. product.component.html
	4. product.component.css

## Create Service:
```
> ng g s product
```
+ g - generate, s - service
+ outputs:
	1. product.service.ts
	2. product.service.spec.ts


## WARNINGs
##### Warning
Your global Angular CLI version (7.3.8) is greater than your local (during ng serve) <br>
##### Solution
```
> ng update @angular/cli
```

## ERRORs
