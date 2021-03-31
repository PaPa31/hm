---
id: install-docker-software
title: Install Docker Software
date: 2021-03-29 12:15:43
---

<a href='https://docs.docker.com/get-docker/' class='external'>Install Docker (docs.docker.com)</a> on your machine and add it to the system path.

## Linux

On Linux, you should also <a href='https://docs.docker.com/engine/install/linux-postinstall/' class='external'>enable Docker CLI for the non-root user account</a> that will be used to run VS Code.

## Windows

### Install Virtual Box

```PowerShell title="PowerShell (as admin)"
C:\ choco install virtualbox
```

During installation:

```shell
...virtualbox installed to 'C:\Program Files\Oracle\VirtualBox' 
as vbox exit code of non-zero will fail the package by default.

Environment Vars (like PATH) have changed.

Close/reopen your shell to see the changes 
(or in powershell/cmd.exe just type `refreshenv`).
```

## Docker Engine Setup

### Install Docker Machine

Install `Docker Machine` by following instructions on this <a href='https://docs.docker.com/machine/install-machine/' class='external'>page (docs.docker.com)</a>. Alternatively, you can execute this command inside an elevated PowerShell terminal:

```shell title="PowerShell (as admin)"
C:\ choco install docker-machine
```

During installation:

```shell
'C:\ProgramData\chocolatey\lib\docker-machine\bin\docker-machine.exe'
 ShimGen has successfully created a shim for docker-machine.exe
 The install of docker-machine was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.
```

### Install Docker Engine

Using Git Bash terminal, use Docker Machine to install `Docker Engine`. This will download a Linux image containing the Docker Engine and have it run as a VM using VirtualBox. Simply execute the following command:

```bash title="Git-Bash"
docker-machine create --driver virtualbox default
```

During installation:

```bash
Running pre-create checks...bash
Error with pre-create check: "This computer is running Hyper-V.
VirtualBox won't boot a 64bits VM when Hyper-V is activated.
Either use Hyper-V as a driver, or disable the Hyper-V hypervisor.
(To skip this check, use --virtualbox-no-vtx-check)"

You can further specify your shell with either 'cmd' or
 'powershell' with the --shell flag.
```

Then I try:

```bash
docker-machine create -d virtualbox --virtualbox-no-vtx-check test
```

During...

```bash
...
(test) Waiting for an IP ...
```

4 years have passedd...

hh
