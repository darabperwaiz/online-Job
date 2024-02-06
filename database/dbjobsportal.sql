-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 05:44 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbjobsportal`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `appid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `jobid` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`appid`, `userid`, `jobid`, `date`) VALUES
(1, 2, 2, '2004-07-21'),
(2, 2, 3, '2004-07-21'),
(3, 12, 0, '2023-03-26'),
(4, 12, 5, '2023-03-26');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `catid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`catid`, `name`) VALUES
(1, 'Front End'),
(2, 'Back End'),
(3, 'Android Development'),
(4, 'kjfdsjdf'),
(5, 'rfk'),
(6, 'data science');

-- --------------------------------------------------------

--
-- Table structure for table `employer`
--

CREATE TABLE `employer` (
  `empid` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `type` int(11) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `experience` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `employer`
--

INSERT INTO `employer` (`empid`, `fname`, `email`, `password`, `type`, `lname`, `phone`, `company`, `experience`) VALUES
(2, 'approxsol', 'ali@gmail.com', '123', 1, '', '', '', 0),
(3, 'LG', 'lg123@gmail.com', '123', 1, '', '', '', 0),
(4, 'Salaj', 'salajmoal27032001@gmail.com', 'mondalcse18', 1, 'Mondal', '7797277095', 'TCS', 34);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `jobid` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `catid` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `salary` varchar(50) NOT NULL,
  `timing` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `empid` int(11) NOT NULL,
  `experience` int(50) NOT NULL,
  `skills` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`jobid`, `title`, `catid`, `description`, `salary`, `timing`, `location`, `empid`, `experience`, `skills`) VALUES
(1, 'Front end Designer', 1, 'front designing, ui/ux etc', '20000', '11 to 1', 'Karachi, Pakistan', 2, 0, ''),
(2, 'Android developer', 3, 'java, xml, ui/ux, kotlin would be plus ', '25000', '3 to 5 ', 'Karachi, Pakistan', 2, 0, ''),
(3, 'Asp.net developer', 2, 'asp.net mvc, rest api, angular would be plus', '35000', '9 to 5 ', 'Karachi, Pakistan', 2, 0, ''),
(4, 'fdjkfjkfds', 1, 'hfjdkkd', '14000', '9 am to 5 pm', 'fdskfdkjfdskj', 2, 12, 'python'),
(5, 'java developer', 1, 'jfkkfflf', '14000', '9 am to 5 pm', 'kolkate', 2, 34, 'python');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `profileid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `qulification` varchar(50) NOT NULL,
  `exp` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `type` int(11) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `skill` text NOT NULL,
  `experience` int(20) NOT NULL,
  `qualification` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `fname`, `email`, `password`, `type`, `lname`, `location`, `skill`, `experience`, `qualification`, `phone`) VALUES
(2, 'usman', 'usman@gmail.com', '123', 2, '', '0', '', 0, '', ''),
(12, 'Salaj', 'salajmondal27032001@gmail.com', 'mondalcse18', 0, 'Mondal', '0', 'python', 34, 'b.tech', '7797277095'),
(17, 'Salaj', 'salajmonda27032001@gmail.com', 'mondalcse18', 2, 'Mondal', 'South 24 Parganas, West Bengal', 'python', 34, 'b.tech', '7797277095'),
(18, 'Salaj', 'salajmondal271@gmail.com', 'mondalcse18', 2, 'Mondal', 'South 24 Parganas, West Bengal', 'python', 34, 'b.tech', '7797277095');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`appid`),
  ADD KEY `FK_application` (`userid`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`catid`);

--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`empid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`jobid`),
  ADD KEY `FK_jobs` (`empid`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profileid`),
  ADD KEY `FK_profile` (`userid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `appid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `catid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `empid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `jobid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profileid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `FK_application` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
