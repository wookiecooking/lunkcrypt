# Lunkcrypt
> :warning: **THIS REPOSITORY IS NOT MAINTAINED ANYMORE. IF YOU WOULD LIKE TO VOLUNTEER TO BE THE MAINTAINER, PLEASE OPEN AN ISSUE

Quick and gritty AES-256 file encryption cli.

## Demo
![Demo](https://raw.githubusercontent.com/wookiecooking/lunkcrypt/master/demo.gif)

[More Information About AES](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

## Install
```sh
$ [sudo] npm install --global lunkcrypt
```

## Usage

#### Encrypt :
```sh
$ lunk -e somefile.txt -p "some random password"
```

#### Decrypt :
```sh
$ lunk -d somefile.txt -p "some random password"
```

#### Recursive :
```sh
$ lunk -er somefolder/ -p "some random password"
```

#### Generate Password :
```sh
$ lunk -ge somefile.txt
```

