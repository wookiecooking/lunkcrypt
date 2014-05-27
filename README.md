# Lunkcrypt
Node.JS Command line (CLI) AES-256 File Encryption Tool.

#### Demo
![Demo](https://raw.githubusercontent.com/wookiecooking/lunkcrypt/master/demo.gif)

[More Information About AES](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard) 

#### Install
	npm install -g lunkcrypt
#####Encrypt : 
	lunk -e somefile.txt -p "some random password"
#####Decrypt :
	lunk -d somefile.txt -p "some random password"
#####Recursive : 
	lunk -er somefolder/ -p "some random password"
#####Generate Password : 
	lunk -ge somefile.txt

		