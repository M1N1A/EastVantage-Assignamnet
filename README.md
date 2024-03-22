﻿# EastVantage-Assignamnet

 React Js
------------
-> npx create-react-app test --template typescript
-> npm install react-bootstrap bootstrap
-> npm i font-awesome
-> npm install @fontawesome/fontawesome-free
-> npm install axios
-> npm install react-router-dom


**Laravel**
-------------
1) Create new project laravel for name of server
2) Create Models Users, Roles
3) Create Controller UsersController
4) Create methods index, store, roles
5) add Routes as below
   Route::group(["prefix" => "users"], function() {
    Route::get('/', 'UsersController@index');
    
    Route::post('/insert', 'UsersController@store');

    Route::get('/roles', 'UsersController@roles');

});

**Laravel**
-------------
Create Database name : east_vantage_users

Schema:

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
