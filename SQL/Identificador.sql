-- DROP SCHEMA dbo;

CREATE SCHEMA dbo;
-- Identificador.dbo.AspNetRoles definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetRoles GO

CREATE TABLE Identificador.dbo.AspNetRoles (
	Id nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	Name nvarchar(256) COLLATE Modern_Spanish_CI_AS NULL,
	NormalizedName nvarchar(256) COLLATE Modern_Spanish_CI_AS NULL,
	ConcurrencyStamp nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT PK_AspNetRoles PRIMARY KEY (Id)
) GO
 CREATE  UNIQUE NONCLUSTERED INDEX RoleNameIndex ON dbo.AspNetRoles (  NormalizedName ASC  )  
	 WHERE  ([NormalizedName] IS NOT NULL)
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- Identificador.dbo.AspNetUsers definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetUsers GO

CREATE TABLE Identificador.dbo.AspNetUsers (
	Id nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	UserName nvarchar(256) COLLATE Modern_Spanish_CI_AS NULL,
	NormalizedUserName nvarchar(256) COLLATE Modern_Spanish_CI_AS NULL,
	Email nvarchar(256) COLLATE Modern_Spanish_CI_AS NULL,
	NormalizedEmail nvarchar(256) COLLATE Modern_Spanish_CI_AS NULL,
	EmailConfirmed bit NOT NULL,
	PasswordHash nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	SecurityStamp nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	ConcurrencyStamp nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	PhoneNumber nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	PhoneNumberConfirmed bit NOT NULL,
	TwoFactorEnabled bit NOT NULL,
	LockoutEnd datetimeoffset NULL,
	LockoutEnabled bit NOT NULL,
	AccessFailedCount int NOT NULL,
	CONSTRAINT PK_AspNetUsers PRIMARY KEY (Id)
) GO
 CREATE NONCLUSTERED INDEX EmailIndex ON dbo.AspNetUsers (  NormalizedEmail ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO
 CREATE  UNIQUE NONCLUSTERED INDEX UserNameIndex ON dbo.AspNetUsers (  NormalizedUserName ASC  )  
	 WHERE  ([NormalizedUserName] IS NOT NULL)
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- Identificador.dbo.[__EFMigrationsHistory] definition

-- Drop table

-- DROP TABLE Identificador.dbo.[__EFMigrationsHistory] GO

CREATE TABLE Identificador.dbo.[__EFMigrationsHistory] (
	MigrationId nvarchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	ProductVersion nvarchar(32) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK___EFMigrationsHistory PRIMARY KEY (MigrationId)
) GO;


-- Identificador.dbo.AspNetRoleClaims definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetRoleClaims GO

CREATE TABLE Identificador.dbo.AspNetRoleClaims (
	Id int IDENTITY(1,1) NOT NULL,
	RoleId nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	ClaimType nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	ClaimValue nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT PK_AspNetRoleClaims PRIMARY KEY (Id),
	CONSTRAINT FK_AspNetRoleClaims_AspNetRoles_RoleId FOREIGN KEY (RoleId) REFERENCES Identificador.dbo.AspNetRoles(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetRoleClaims_RoleId ON dbo.AspNetRoleClaims (  RoleId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- Identificador.dbo.AspNetUserClaims definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetUserClaims GO

CREATE TABLE Identificador.dbo.AspNetUserClaims (
	Id int IDENTITY(1,1) NOT NULL,
	UserId nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	ClaimType nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	ClaimValue nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT PK_AspNetUserClaims PRIMARY KEY (Id),
	CONSTRAINT FK_AspNetUserClaims_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES Identificador.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetUserClaims_UserId ON dbo.AspNetUserClaims (  UserId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- Identificador.dbo.AspNetUserLogins definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetUserLogins GO

CREATE TABLE Identificador.dbo.AspNetUserLogins (
	LoginProvider nvarchar(128) COLLATE Modern_Spanish_CI_AS NOT NULL,
	ProviderKey nvarchar(128) COLLATE Modern_Spanish_CI_AS NOT NULL,
	ProviderDisplayName nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	UserId nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK_AspNetUserLogins PRIMARY KEY (LoginProvider,ProviderKey),
	CONSTRAINT FK_AspNetUserLogins_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES Identificador.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetUserLogins_UserId ON dbo.AspNetUserLogins (  UserId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- Identificador.dbo.AspNetUserRoles definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetUserRoles GO

CREATE TABLE Identificador.dbo.AspNetUserRoles (
	UserId nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	RoleId nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK_AspNetUserRoles PRIMARY KEY (UserId,RoleId),
	CONSTRAINT FK_AspNetUserRoles_AspNetRoles_RoleId FOREIGN KEY (RoleId) REFERENCES Identificador.dbo.AspNetRoles(Id) ON DELETE CASCADE,
	CONSTRAINT FK_AspNetUserRoles_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES Identificador.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO
 CREATE NONCLUSTERED INDEX IX_AspNetUserRoles_RoleId ON dbo.AspNetUserRoles (  RoleId ASC  )  
	 WITH (  PAD_INDEX = OFF ,FILLFACTOR = 100  ,SORT_IN_TEMPDB = OFF , IGNORE_DUP_KEY = OFF , STATISTICS_NORECOMPUTE = OFF , ONLINE = OFF , ALLOW_ROW_LOCKS = ON , ALLOW_PAGE_LOCKS = ON  )
	 ON [PRIMARY ]  GO;


-- Identificador.dbo.AspNetUserTokens definition

-- Drop table

-- DROP TABLE Identificador.dbo.AspNetUserTokens GO

CREATE TABLE Identificador.dbo.AspNetUserTokens (
	UserId nvarchar(450) COLLATE Modern_Spanish_CI_AS NOT NULL,
	LoginProvider nvarchar(128) COLLATE Modern_Spanish_CI_AS NOT NULL,
	Name nvarchar(128) COLLATE Modern_Spanish_CI_AS NOT NULL,
	Value nvarchar COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT PK_AspNetUserTokens PRIMARY KEY (UserId,LoginProvider,Name),
	CONSTRAINT FK_AspNetUserTokens_AspNetUsers_UserId FOREIGN KEY (UserId) REFERENCES Identificador.dbo.AspNetUsers(Id) ON DELETE CASCADE
) GO;;
