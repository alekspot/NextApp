--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Debian 16.1-1.pgdg120+1)
-- Dumped by pg_dump version 16.0

-- Started on 2024-02-01 00:03:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16384)
-- Name: app; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA app;


ALTER SCHEMA app OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16385)
-- Name: category; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.category (
    id bigint NOT NULL,
    title text,
    email text NOT NULL
);


ALTER TABLE app.category OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16390)
-- Name: category_id_seq; Type: SEQUENCE; Schema: app; Owner: postgres
--

ALTER TABLE app.category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16391)
-- Name: item; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.item (
    id bigint NOT NULL,
    title text,
    category_id bigint,
    description text,
    username text NOT NULL
);


ALTER TABLE app.item OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16396)
-- Name: item_id_seq; Type: SEQUENCE; Schema: app; Owner: postgres
--

ALTER TABLE app.item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME app.item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3357 (class 0 OID 16385)
-- Dependencies: 216
-- Data for Name: category; Type: TABLE DATA; Schema: app; Owner: postgres
--



--
-- TOC entry 3359 (class 0 OID 16391)
-- Dependencies: 218
-- Data for Name: item; Type: TABLE DATA; Schema: app; Owner: postgres
--

INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (1, 'HTML', NULL, 'HTML description', '1323');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (14, 'dawdaw', NULL, '# dawdaw', 'admin@mail.ru');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (15, 'dawdawd', NULL, '# dawdawd', 'admin@mail.ru');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (16, 'dawdawd', NULL, '# dawdawd', 'admin@mail.ru');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (19, 'TEST', NULL, '# TEST', 'test');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (20, 'czscszcs', NULL, '# czscszcs', 'test');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (55, 'adawdawdawd', NULL, '# adawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (56, 'dawdaw', NULL, '# dawdaw', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (57, 'dawdadad', NULL, '# dawdadad', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (58, 'dawdawda', NULL, '# dawdawda', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (59, 'dawdawdawdawd', NULL, '# dawdawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (60, 'adwdawdawd', NULL, '# adwdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (61, 'dawdawdawdadw', NULL, '# dawdawdawdadw', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (62, 'dawdawdawdawd', NULL, '# dawdawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (63, 'dawdaddad', NULL, '# dawdaddad', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (64, 'dawdawdawdd', NULL, '# dawdawdawdd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (65, 'dawdawdawd', NULL, '# dawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (66, 'awdawdawdad', NULL, '# awdawdawdad', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (67, '222222', NULL, '# 222222', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (68, 'React', NULL, '# React', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (69, 'adwdawdawd', NULL, '# adwdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (70, 'dawdawdd', NULL, '# dawdawdd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (71, 'dawdawdaw', NULL, '# dawdawdaw', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (72, 'dawdawdad', NULL, '# dawdawdad', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (73, 'awdwdawdawdd', NULL, '# awdwdawdawdd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (74, 'awdawdawdawd', NULL, '# awdawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (75, 'dawdawdawdad', NULL, '# dawdawdawdad', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (76, 'fgergrdgdg', NULL, '# fgergrdgdg', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (77, 'dawdawdawd', NULL, '# dawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (78, 'dawdawdawd', NULL, '# dawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (79, 'dawdawdaw', NULL, '# dawdawdaw', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (80, 'ceka', NULL, '# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka
# ceka', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (81, 'dawdawdawd', NULL, '# dawdawdawd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (18, 'ADMIN', NULL, '# ADMIN 444566666gggg', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (22, '234423423', NULL, '# 234423423ddddd', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (83, 'dawdwa', NULL, '# dawdwa', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (84, '88888', NULL, '# 88888', 'admin');
INSERT INTO app.item OVERRIDING SYSTEM VALUE VALUES (85, 'bbbb', NULL, '# bbbb', 'admin');


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 217
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: app; Owner: postgres
--

SELECT pg_catalog.setval('app.category_id_seq', 1, false);


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: app; Owner: postgres
--

SELECT pg_catalog.setval('app.item_id_seq', 85, true);


--
-- TOC entry 3210 (class 2606 OID 16398)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3212 (class 2606 OID 16400)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 16401)
-- Name: item item_category_id_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.item
    ADD CONSTRAINT item_category_id_fkey FOREIGN KEY (category_id) REFERENCES app.category(id) NOT VALID;


-- Completed on 2024-02-01 00:03:06

--
-- PostgreSQL database dump complete
--

