# Videos.NET

## Overview

A functioning hobby project to bring my .NET skills up to date. It's a small video-management system. It runs on MacOS.

This project has:

* **MicroService** - Backed by SQL Server
  * **port:** 5001
  * **routes:** Index, Details, Create, Update, Delete
  * **protocols:** HTTP and HTTPS
* **Browser Interface** - Index View that lists all Videos. It makes an XHR to the service.
  * **port:** 5000
  * **routes:** Index. Full CRUD forthcoming.

## Technologies

Dot Net is now a pleasure to develop on locally on MacOS, since the advent of Docker and MS open-sourcing .NET.

* **C# on ASP.NET** - Yup. Running on my Mac.
* **MS SQL Server** - Yup. Running on my Mac.
* **React.js** - Frontend
* **JSX** - Compoenents
* **Material-UI** - GUI styled with Material-UI CSS framework.
* **Babel & WebPack** - Transpilation
  * **Hot Module Replacement (HMR)** - Auto-recompiles and refreshes browser on every code change.

## Setup

* **MacOS**
* **[.NET Core SDK](https://dotnet.microsoft.com/download)**
* **[Docker Desktop](https://www.docker.com/products/docker-desktop)**
* **[SQL Server Docker Image](https://hub.docker.com/r/microsoft/mssql-server-linux)**

`$ sudo docker pull microsoft/mssql-server-linux:latest`

Env Vars, in the container, should be set as:

* `ACCEPT_EULA=Y`
* `SA_PASSWORD=Passw0rd!`

Ports should be: 1433:1433

From the root of this proj:

`$ npm install`

Upon first load of this app, it will seed the SQL DB with a few records. WebPack compile will happen automatically; no having to run `npm run` every time.

`$ dotnet run`

* Service browseable on 5001: http://localhost:5001/api/videos
* Web app on 5000: http://localhost:5000/home/

Service must be running for the Web app to work. It makes an XHR call to it.

## Tools

All run on MacOS.

* **[VS Code](https://code.visualstudio.com/)**
* **[MS Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017)**
* **[Kitematic](https://kitematic.com/)**

## Screenshots

MicroService JSON Response. Supports full CRUD:

![image](https://user-images.githubusercontent.com/214047/64888860-f8f81a80-d639-11e9-90b0-d47ed7d21d54.png)

Material-UI-themed React UI (showing XHR call to MicroService):

![image](https://user-images.githubusercontent.com/214047/65113694-30582580-d9b2-11e9-9a4a-4f18362c0be4.png)
