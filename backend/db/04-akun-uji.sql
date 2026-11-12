-- Akun uji

USE review_kantin;
GO

UPDATE dbo.USERS
SET password_hash = N'$2b$10$H1QSwqIRk/vjcdUq5p.kTOfEJC14PuBDvxHd2gVkN9iCtFh8N6mxq'
WHERE email IN (
    N'admin@kantin.test',   -- admin
    N'tini@kantin.test',    -- owner, Warung Bu Tini
    N'slamet@kantin.test',  -- owner, Kedai Pak Slamet
    N'bagas@student.test'   -- customer
);
GO

SELECT id, name, email, role FROM dbo.USERS
WHERE email IN (N'admin@kantin.test', N'tini@kantin.test', N'slamet@kantin.test', N'bagas@student.test');
GO
