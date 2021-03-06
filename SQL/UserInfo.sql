use BootcampDB;

Create Table UserInfo(
UserId Int Identity (1,1) Not null Primary Key,
FirstName Varchar(30) Not null,
LastName Varchar(30) Not null,
UserName Varchar(30) Not null,
Email Varchar(50) Not null,
Password Varchar(20) Not null,
CreatedDate DateTime Default(GetDate()) Not null)

INSERT INTO BootcampDB.dbo.UserInfo (FirstName,LastName,UserName,Email,Password,CreatedDate) VALUES
	 ('hola','adios','hola','hola@hola.com','Hola_123','2021-03-02 16:04:56.27');