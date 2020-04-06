# Videos.NET

## Overview

A functioning hobby project to bring my C# and .NET skills up to date. It's a small, single-page video-management system. It runs on MacOS.

This project has:

* **MicroService** - Backed by SQL Server
  * **routes:** Index, Details, Create, Update, Delete
  * **RESTful**
  * **protocols:** HTTP and HTTPS
* **Browser Interface** - Makes XHR calls to the service.
  * **routes:** Index, Create, Upadte, Delete

## Technologies

Dot Net is a pleasure to develop on locally on MacOS, since the advent of Docker and MS open-sourcing .NET.

* **C# on ASP.NET Core** - Running on my Mac. :smile:
* **MS SQL Server** - Running on my Mac. :smile:
* **React.js** - Frontend
  * **JSX** - Compoenents
* **Material-UI** - Dark GUI styled with Material-UI CSS framework.
  * **Resposive Design** - Adapts to mobile
* **Babel & WebPack** - Transpilation and ES6 support
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
`$ dotnet ef database update`

The Migrations will create the SQL schema and seed the DB with a few records.

`$ dotnet watch run`

The WebPack transpile will happen automatically; no having to run an `npm run` script every time. The `watch` part of the command will do the same for the C# code: recompile upon changes.

* Service browseable at: http://localhost:5000/api/videos
* Web app on 5000: http://localhost:5000/home/

Service must be running for the Web app to work. It makes an XHR call to it.

## Tools

All run on MacOS.

* **[VS Code](https://code.visualstudio.com/)**
* **[MS Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017)**
* **[Kitematic](https://kitematic.com/)**

## Screenshots

Dark-themed React GUI:

![image](https://user-images.githubusercontent.com/214047/65363869-14d06300-dbdc-11e9-82e6-c4e508b596cc.png)

MicroService JSON Response. Supports full CRUD:

![image](https://user-images.githubusercontent.com/214047/65304104-ceccbe00-db4d-11e9-99d9-381d0dea46d6.png)
