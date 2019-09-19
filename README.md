# Videos.NET

## Overview

A functioning hobby project to bring my .NET skills up to date. It's a small video-management system. It runs on MacOS.

This project has:

* **MicroService** - Backed by SQL Server
  * **port:** 5001
  * **routes:** Index, Details, Create, Update, Delete
  * **protocols:** HTTP and HTTPS
* **Browser Interface** - Makes XHR calls to the service.
  * **port:** 5000
  * **routes:** Index, Create, Delete. Update forthcoming.

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
`$ dotnet ef database update`

The Migrations will create the SQL schema and seed the DB with a few records.

`$ dotnet watch run`

The WebPack transpile will happen automatically; no having to run an `npm run` script every time. The `watch` part of the command will do the same for the C# code: recompile upon changes.

* Service browseable on 5001: http://localhost:5001/api/videos
* Web app on 5000: http://localhost:5000/home/

Service must be running for the Web app to work. It makes an XHR call to it.

## Tools

All run on MacOS.

* **[VS Code](https://code.visualstudio.com/)**
* **[MS Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017)**
* **[Kitematic](https://kitematic.com/)**

## Screenshots

Material-UI-themed React UI (showing XHR call to MicroService):

![image](https://user-images.githubusercontent.com/214047/65206569-cfd1f280-da5c-11e9-9252-cb479afa89d8.png)

MicroService JSON Response. Supports full CRUD:

![image](https://user-images.githubusercontent.com/214047/64888860-f8f81a80-d639-11e9-90b0-d47ed7d21d54.png)
