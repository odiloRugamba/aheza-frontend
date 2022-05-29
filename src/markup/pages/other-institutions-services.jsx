import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalById } from "../../store/hospital/actions";
import { Dcore } from '../../api';
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/pic1.jpg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

const ServiceDetail = () => {
	const [hospital, setHospital] = useState(null)
	const dataTitles = [
		{ name: 'ACCROSSAID', _id: 0 },
		{ name: 'ADEPR MUSANZE', _id: 2 },
		{ name: 'AEE RWANDA', _id: 3 },
		{ name: 'AEGIS TRUST', _id: 4 },
		{ name: 'AERG', _id: 5 },
		{ name: 'African Humanitarian Action', _id: 6 },
		{ name: 'AGAHOZO-Shalom Youth Village', _id: 7 },
		{ name: 'AGHR (ASSOCIATION GENERALE DES HANDICAPES DU RWANDA - AGHR)', _id: 8 },
		{ name: 'AIMR- IHORERE MUNYARWANDA', _id: 9 },
		{ name: 'ALIGHT (ARC)', _id: 10 },
		{ name: 'AMEGERWA', _id: 11 },
		{ name: 'ANTI DRUG ABUSE ORGANIZATION', _id: 12 },
		{ name: 'ARCT-RUHUKA', _id: 13 },
		{ name: 'ASOFERWA (ASSOCIATION DE SOLIDARITE DES FEMME)', _id: 13 },
		{ name: 'ASPIRE RWANDA', _id: 14 },
		{ name: 'ASSOCIATION GARUKA', _id: 15 },
		{ name: 'ASSOCIATION MABAWA', _id: 16 },
		{ name: 'ASSOCIATION MODESTE ET INNOCENT (AMI)', _id: 17 },
		{ name: 'AVEGA AGAHOZO', _id: 18 },
		{ name: 'CARITAS  DIOCESAINE DE BYUMBA', _id: 19 },
		{ name: 'CARITAS RWANDA', _id: 20 },
		{ name: "CENTRE INSHUTI ZACU (Soeurs Inshuti z'Abakene) ", _id: 21 },
		{ name: 'CENTRE MAREMBO', _id: 22 },
		{ name: 'Children and Youth Sports Organisation', _id: 23 },
		{ name: 'CLINICAL PSYCHOLOGY STUDENTS ASSOCIATION', _id: 24 },
		{ name: 'COMMISSION EPISCOPALE JUSTICE & PAIX', _id: 25 },
		{ name: 'COMMUNITY BASED  SOCIOTHERAPY', _id: 26 },
		{ name: 'COMPASSION INTERNATIONALE RWANDA', _id: 27 },
		{ name: 'FAITH VICTORY ASSOCIATION', _id: 28 },
		{ name: 'FAMILLE ESPERANCE', _id: 29 },
		{ name: 'Family Circle Love Lab Organization ( FCLLO)', _id: 30 },
		{ name: 'FXB RWANDA ( Francois Xavier Bagnoud Rwanda)', _id: 31 },
		{ name: 'GAERG', _id: 32 },
		{ name: 'GALLAGHER TUBITEHO', _id: 33 },
		{ name: 'GERUKA HEALING CENTER', _id: 34 },
		{ name: 'GLOBAL EPILEPTIC CONNECTION', _id: 35 },
		{ name: 'GREEN HEALTH ORGANIZATION', _id: 36 },
		{ name: 'HAGURUKA', _id: 37 },
		{ name: 'HEALING AND REBUILDING OUR COMMUNITY', _id: 38 },
		{ name: 'HOPE AND HOMES FOR CHILDREN', _id: 39 },
		{ name: 'HOPE FOR LIVING ASSOCIATION', _id: 40 },
		{ name: 'HOPETHIOPIA RWANDA', _id: 41 },
		{ name: 'HOPITAL NEURO-PSYCHIATRIQUE (CARAES NDERA)', _id: 42 },
		{ name: 'HUMANITY INCLUSION', _id: 43 },
		{ name: 'INTERNATIONAL ALERT', _id: 44 },
		{ name: 'ITABWEHO', _id: 45 },
		{ name: 'IZERE MUBYEYI ORGANIZATION', _id: 46 },
		{ name: 'LES ENFANTS DE DIEU', _id: 47 },
		{ name: 'LES NAZAREENS', _id: 48 },
		{ name: 'LIWOHA- Life Wounds Healing Association', _id: 49 },
		{ name: 'Mental Health Diginity foundation', _id: 50 },
		{ name: 'MENTAL HEALTH NURSE STUDENTS ASSOCIATION LED ORGANISATION', _id: 51 },
		{ name: 'MIZERO CARE ORGANISATION', _id: 52 },
		{ name: 'MOUCECORE', _id: 53 },
		{ name: 'MUTIMAWURUGO CLARE', _id: 54 },
		{ name: 'NATIONAL REHABILITATION SERVICE', _id: 55 },
		{ name: 'NEVER AGAIN RWANDA', _id: 56 },
		{ name: 'OPPROMAMER', _id: 57 },
		{ name: "OSSARAU ( Organisation socio-culturelle des Sans Autrui au Rwanda D'Aujourd'hui)", _id: 58 },
		{ name: 'OYES (ORGANIZATION FOR THE YOUTH EMPOWERMENT AND STRIVE)', _id: 59 },
		{ name: 'PARTNERS IN HEALTH/INSHUTI MU BUZIMA', _id: 60 },
		{ name: 'PRISON FELLOWSHIP RWANDA', _id: 61 },
		{ name: 'PsyRWanda Organisation', _id: 62 },
		{ name: 'REBEJO ORGANISATION', _id: 63 },
		{ name: 'Réseaux de Développement de femmes pauvres (RDFP)', _id: 64 },
		{ name: 'Rwanda Demobolisation and Re-Intergration Commission (RDRC)', _id: 65 },
		{ name: 'RWANDA INITIATIVE AGAINST DRUG ABUSE AND RELATED CRIMES (RIDARC)', _id: 66 },
		{ name: 'RWANDA LEGACY OF HOPE', _id: 67 },
		{ name: 'RWANDA PALLIATIVE CARE AND HOSPICE ORGANIZATION', _id: 68 },
		{ name: 'RWANDA PSYCHOLOGISTS SOCIETY', _id: 69 },
		{ name: 'Rwanda Red-Cross Society', _id: 70 },
		{ name: 'RWANDA VILLAGE COMMUNITY PROMOTERS', _id: 71 },
		{ name: 'Rwanda Youths Action for Development (RYAD)', _id: 72 },
		{ name: 'Rwandan Society Psychiatrist Mental Health Nurses', _id: 73 },
		{ name: 'SAVE GENERATION ORGANISATION', _id: 74 },
		{ name: 'Save the children International', _id: 75 },
		{ name: 'SEXUAL HEALTH EDUCATION CENTER', _id: 76 },
		{ name: "SOCIETE DE L'APOSTOLAT CATHOLIQUE of 8th June 1973. All activities related to Mental Health are done under PALLOTTI CHILDREN HOPE CENTER of 1st January 2011 located in Gisagara district, Southern Province with Postal adress Po Box 700- Butare", _id: 77 },
		{ name: 'SOLID AFRICA', _id: 78 },
		{ name: 'SOLID MINDS', _id: 79 },
		{ name: 'Solidarity for the development of widows and orphans to promote self-sufficiency and livelihoods (SEVOTA)', _id: 80 },
		{ name: 'SOS', _id: 81 },
		{ name: 'STRIVE FOUNDATION Rwanda', _id: 82 },
		{ name: 'UMBRELLA OF ORGANIZATIONS OF PERSONS WITH DISABILITIES IN THE FIGHT AGAINST HIV&AIDS AND FOR HEALTH PROMOTION (UPHLS)', _id: 83 },
		{ name: 'UMURAGE UHEBUJE', _id: 84 },
		{ name: 'UMUZABIBU MWIZA ORGANIZATION', _id: 85 },
		{ name: 'UR-SUPPORT ORGANIZATION (URUGERO RWIZA SUPPORT ORGANIZATION)', _id: 86 },
		{ name: 'UYISENGA NI IMANZI', _id: 87 },
		{ name: 'WORLD VISION', _id: 88 },
	]

	const data = [
		{ name: 'ACCROSSAID', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "TCommunity outreach to empower vulnerable children and young people through educational and socio-economic opportunities.", pvp: "Social development/health programs", psychosocial: 'a. Promotive  b. Preventive e. Rehabilitative', location: "Kigali city, KN87 ST NYARUGENGE", mailling: "No postal address, Please contact us via email address: accrossaid@gmail", type: 'a. Promotive: Promoting mental health awareness and mental well being  b. Preventive: Prevention and intervention programs (i.e. reducing levels of anxiety, therapeutic listening, etc.) e. Rehabilitative: Providing short- or long-term support for patients to improve their mental health wellness before returning home/ to society f. Training: Educating other mental health workers g. Empowerment/Self-Help i. Supportive Services (housing, economic/employment, etc.)', setting: '1) Home visit  (2) In community', public: 'NGO', concerns: 'Depression, bipolar disorder, and other mood disorders, Psychosomatic problems, Substance abuse disorders', nameAddress: 'ACROSSAID, KN87 ST NYARUGENGE district, MUHIMA sector, AKABEZA cell, UBWIZA village', website: 'www.acrossaid.org', phoneNumber: '++250788813783', eAddress: 'joelmph@gmail.com' },
		{ name: 'ADEPR MUSANZE', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "Substance abuse prevention and management", pvp: "Substance abuse prevention and management", psychosocial: 'Preventive, Palliative,  Rehabilitative', location: "Musanze District, Muhoza Sector, Mpenge cell, Rukoro village, RN4 Rue Muhabura", mailling: "P.O.BOX 21 Musanze", type: 'b. Preventive: Prevention and intervention programs (i.e. reducing levels of anxiety, therapeutic listening, etc.) d. Palliative: Providing patients with other supportive care that does not necessarily address the cause of mental health conditions. It is often used in severe persistent mental illness to reduce harm and avoid burdensome psychiatric interventions. e. Rehabilitative: Providing short- or long-term support for patients to improve their mental health wellness before returning home/ to society f. Training: Educating other mental health workers g. Empowerment/Self-Help h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'Home visit, In community, Your offices', public: 'NGO', concerns: '(1) Anxiety disorders, including panic disorder, obsessive-compulsive disorder, and phobias (2) Depression, bipolar disorder, and other mood disorders (3) Eating disorders (4) Personality disorders (5) Post-traumatic stress disorder/Genocide-related MH disorders (6) Suicide  (7) Psychosomatic problems (8) Psychotic disorders, including schizophrenia 9) Substance abuse disorders (10) Neurological problems (11)  Persons with epilepsy', nameAddress: 'ADEPR MUSANZE, "Musanze District, Muhoza Sector , Mpenge cell, Rukoro village, RN4 Rue Muhabura"', website: 'None', phoneNumber: '+250785427220', eAddress: 'muhozadepr@gmail.com' },

		{ name: 'AEE RWANDA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "Provide psychosocial service through OVC (Orphan & Vulnerable Children) project", pvp: "Social development / health programs", psychosocial: 'Promotive, Preventive ', location: "Kigali City,KK 37 Ave", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'a. Promotive: Promoting mental health awareness and mental well being  b. Preventive: Prevention and intervention programs (i.e. reducing levels of anxiety, therapeutic listening, etc.) g. Empowerment/Self-Help i. Supportive Services (housing, economic/employment, etc.)', setting: 'Home visit, In community', public: 'NGO', concerns: '(1) Anxiety disorders, including panic disorder, obsessive-compulsive disorder, and phobias (2) Depression, bipolar disorder, and other mood disorders (5) Post-traumatic stress disorder/Genocide-related MH disorders', nameAddress: 'AEE RWANDA, KG 230 ST KIGALI CITY', website: 'www.aeerwanda.ngo', phoneNumber: '+250788541586', eAddress: 'aniyibigira@aeerwanda.ngo' },
		{ name: 'AEGIS TRUST', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide counseling and psychosocial support", pvp: "Psychosocial support & rehabilitation", psychosocial: 'Promotive, Preventive, Rehabilitative', location: "KG. 689 st, KIGALI", mailling: "P.o.box 7152 KIGALI", type: 'a. Promotive: Promoting mental health awareness and mental well being  b. Preventive: Prevention and intervention programs (i.e. reducing levels of anxiety, therapeutic listening, etc.) e. Rehabilitative: Providing short- or long-term support for patients to improve their mental health wellness before returning home/ to society f. Training: Educating other mental health workers g. Empowerment/Self-Help h. Patient Advocacy', setting: 'Your offices', public: 'NGO', concerns: '(2) Depression, bipolar disorder, and other mood disorders (5) Post-traumatic stress disorder/Genocide-related MH disorders (12)  Other, please specify', nameAddress: 'AEGIS TRUST, KG. 689 st, KIGALI', website: 'www.aegistrust.org', phoneNumber: '+250788307666', eAddress: 'freddy.mutanguha@aegistrust.org.rw' },

		{ name: 'AERG', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'African Humanitarian Action', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },

		{ name: 'AGAHOZO-Shalom Youth Village', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "aee@aeerwanda.ngo", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'AGHR (ASSOCIATION GENERALE DES HANDICAPES DU RWANDA - AGHR)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'AIMR- IHORERE MUNYARWANDA', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ALIGHT (ARC)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },

		{ name: 'AMEGERWA', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ANTI DRUG ABUSE ORGANIZATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ARCT-RUHUKA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ASOFERWA (ASSOCIATION DE SOLIDARITE DES FEMME)', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },

		{ name: 'ASPIRE RWANDA', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ASSOCIATION GARUKA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ASSOCIATION MABAWA', category: 'Epilepsy', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ASSOCIATION MODESTE ET INNOCENT (AMI)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'AVEGA AGAHOZO', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'CARITAS  DIOCESAINE DE BYUMBA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'CARITAS RWANDA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: "CENTRE INSHUTI ZACU (Soeurs Inshuti z'Abakene) ", category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'CENTRE MAREMBO', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Children and Youth Sports Organisation', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'CLINICAL PSYCHOLOGY STUDENTS ASSOCIATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'COMMISSION EPISCOPALE JUSTICE & PAIX', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'COMMUNITY BASED  SOCIOTHERAPY', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'COMPASSION INTERNATIONALE RWANDA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'FAITH VICTORY ASSOCIATION', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'FAMILLE ESPERANCE', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Family Circle Love Lab Organization ( FCLLO)', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'FXB RWANDA ( Francois Xavier Bagnoud Rwanda)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'GAERG', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'GALLAGHER TUBITEHO', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'GERUKA HEALING CENTER', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'GLOBAL EPILEPTIC CONNECTION', category: 'Epilepsy', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'GREEN HEALTH ORGANIZATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HAGURUKA', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HEALING AND REBUILDING OUR COMMUNITY', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HOPE AND HOMES FOR CHILDREN', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HOPE FOR LIVING ASSOCIATION', category: 'Substance abuse prevention and Management ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HOPETHIOPIA RWANDA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HOPITAL NEURO-PSYCHIATRIQUE (CARAES NDERA)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'HUMANITY INCLUSION', category: 'Epilepsy', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'INTERNATIONAL ALERT', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'ITABWEHO', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'IZERE MUBYEYI ORGANIZATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'LES ENFANTS DE DIEU', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'LES NAZAREENS', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'LIWOHA- Life Wounds Healing Association', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Mental Health Diginity foundation', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'MENTAL HEALTH NURSE STUDENTS ASSOCIATION LED ORGANISATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'MIZERO CARE ORGANISATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'MOUCECORE', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'MUTIMAWURUGO CLARE', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'NATIONAL REHABILITATION SERVICE', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'NEVER AGAIN RWANDA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'OPPROMAMER', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: "OSSARAU ( Organisation socio-culturelle des Sans Autrui au Rwanda D'Aujourd'hui)", category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'OYES (ORGANIZATION FOR THE YOUTH EMPOWERMENT AND STRIVE)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'PARTNERS IN HEALTH/INSHUTI MU BUZIMA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'PRISON FELLOWSHIP RWANDA', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'PsyRWanda Organisation', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'REBEJO ORGANISATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Réseaux de Développement de femmes pauvres (RDFP)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Rwanda Demobolisation and Re-Intergration Commission (RDRC)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'RWANDA INITIATIVE AGAINST DRUG ABUSE AND RELATED CRIMES (RIDARC)', category: 'Substance abuse prevention and Management ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'RWANDA LEGACY OF HOPE', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'RWANDA PALLIATIVE CARE AND HOSPICE ORGANIZATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'RWANDA PSYCHOLOGISTS SOCIETY', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Rwanda Red-Cross Society', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'RWANDA VILLAGE COMMUNITY PROMOTERS', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Rwanda Youths Action for Development (RYAD)', category: 'Substance abuse prevention and Management ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Rwandan Society Psychiatrist Mental Health Nurses', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'SAVE GENERATION ORGANISATION', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Save the children International', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'SEXUAL HEALTH EDUCATION CENTER', category: 'Gender Based Violence (GBV)', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: "SOCIETE DE L'APOSTOLAT CATHOLIQUE of 8th June 1973. All activities related to Mental Health are done under PALLOTTI CHILDREN HOPE CENTER of 1st January 2011 located in Gisagara district, Southern Province with Postal adress Po Box 700- Butare", category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'SOLID AFRICA', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'SOLID MINDS', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'Solidarity for the development of widows and orphans to promote self-sufficiency and livelihoods (SEVOTA)', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'SOS', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'STRIVE FOUNDATION Rwanda', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'UMBRELLA OF ORGANIZATIONS OF PERSONS WITH DISABILITIES IN THE FIGHT AGAINST HIV&AIDS AND FOR HEALTH PROMOTION (UPHLS)', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'UMURAGE UHEBUJE', category: 'Substance abuse prevention and Management ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'UMUZABIBU MWIZA ORGANIZATION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'UR-SUPPORT ORGANIZATION (URUGERO RWIZA SUPPORT ORGANIZATION)', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
		{ name: 'UYISENGA NI IMANZI', category: 'MHS, treatment, Psychosocial support and Rehabilitation', core: "They provide education to vulnerable street children. They carry out psychotherapy. They respond and contribute to the rehabilitation of orphans of genocide and  respond to their needs through counselling.", pvp: "Psychosocial support & rehabilitation", psychosocial: "a. Promotive  b. Preventive, Curative, Rehabilitative", location: "KG501 ST, KIGALI", mailling: " UYISENGA NI IMANZI PO BOX 7257 KIGALI", type: "a. Promotive: Promoting mental health awareness and mental well being  b. Preventive: Prevention and intervention programs (i.e. reducing levels of anxiety, therapeutic listening, etc.) c. Curative: Treating mental health conditions  e. Rehabilitative: Providing short- or long-term support for patients to improve their mental health wellness before returning home/ to society f. Training: Educating other mental health workers g. Empowerment/Self-Help h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)", setting: '1) Home visit  (2) In community (3) Your offices (4) Outpatient or Inpatient facility (5) Residential', public: 'NGO', concerns: '(1) Anxiety disorders, including panic disorder, obsessive-compulsive disorder, and phobias (2) Depression, bipolar disorder, and other mood disorders (4) Personality disorders (5) Post-traumatic stress disorder/Genocide-related MH disorders (6) Suicide  (7) Psychosomatic problems 9) Substance abuse disorders (12)  Other, please specify', nameAddress: 'UYISENGA NI IMANZI, KG501 ST, KIGALI', website: 'www.uyisenganmanzi.org.rw', phoneNumber: '+250788305007', eAddress: 'uyisenga@gmail.com/uwichaste@yahoo.fr' },
		{ name: 'WORLD VISION', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "They provide psychosocial services", pvp: "Social development / health programs", psychosocial: '', location: "KG 5 AVENUE KIGALI", mailling: "P.O BOX 1419 KIGALI RWANDA", type: 'h. Patient Advocacy i. Supportive Services (housing, economic/employment, etc.)', setting: 'In community', public: 'NGO', concerns: 'Other, please specify', nameAddress: 'WORLD VISION INTERNATIONAL Rwanda', website: 'www.wvi.org', phoneNumber: '+250786110533', eAddress: 'jemima_gatete@wvi.org' },
	]
	const [currentOrganition, setCurrentOrganition] = useState(
		{ name: 'ACCROSSAID', category: 'MHS, treatment, Psychosocial support and Rehabilitation ', core: "TCommunity outreach to empower vulnerable children and young people through educational and socio-economic opportunities.", pvp: "Social development/health programs", psychosocial: 'a. Promotive  b. Preventive e. Rehabilitative', location: "Kigali city, KN87 ST NYARUGENGE", mailling: "No postal address, Please contact us via email address: accrossaid@gmail", type: 'a. Promotive: Promoting mental health awareness and mental well being  b. Preventive: Prevention and intervention programs (i.e. reducing levels of anxiety, therapeutic listening, etc.) e. Rehabilitative: Providing short- or long-term support for patients to improve their mental health wellness before returning home/ to society f. Training: Educating other mental health workers g. Empowerment/Self-Help i. Supportive Services (housing, economic/employment, etc.)', setting: '1) Home visit  (2) In community', public: 'NGO', concerns: 'Depression, bipolar disorder, and other mood disorders, Psychosomatic problems, Substance abuse disorders', nameAddress: 'ACROSSAID, KN87 ST NYARUGENGE district, MUHIMA sector, AKABEZA cell, UBWIZA village', website: 'www.acrossaid.org', phoneNumber: '++250788813783', eAddress: 'joelmph@gmail.com' }
	)


	const selectNewCurrent = (i) => {
		console.log(i)
		setCurrentOrganition(el => ({ ...el, ...data[i] }))
		console.log(data[i])
	}

	return (
		<>
			<Header />
			<div className="page-content bg-white" style={{ marginTop: 60 }}>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<aside className="sticky-top pb-1">
									<div className="widget">

										<h5 className="title-head">Institutions</h5>
										<ul className="service-menu">
											{
												dataTitles?.map((el, index) =>
													<li onClick={() => selectNewCurrent(index)}><Link><span>{el.name}</span></Link></li>
												)
											}
										</ul>
									</div>
								</aside>
							</div>

							<div className="col-lg-8 mb-30">
								<div className="post-media">
								</div>
								<div className="clearfix">
									<div className="head-text mb-30">
										<h2 className="title mb-15">{currentOrganition?.name}</h2>
									</div>
								</div>

								<div className='tableName'>

									<div className='tableRow'>
										<div className='titles'>
											Category (RBC)
										</div>
										<div className='dataParty'>
											{currentOrganition?.category}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											Core business/Basis for categorisation
										</div>
										<div className='dataParty'>
											{currentOrganition?.core}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											Category
											(PVP)
										</div>
										<div className='dataParty'>
											{currentOrganition?.pvp}
										</div>
									</div>
									<div className='tableRow'>
										<div className='titles'>
											10. What type of mental health services does your organization provide?
											- MH & Psychosocial Services
										</div>
										<div className='dataParty'>
											{currentOrganition?.psychosocial}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											2. What is your organization’s location&street address?
										</div>
										<div className='dataParty'>
											{currentOrganition?.location}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											4. What is the mailing address of your organization (if different than Q2)?
										</div>
										<div className='dataParty'>
											{currentOrganition?.mailling}
										</div>
									</div>
									<div className='tableRow'>
										<div className='titles'>
											10. What type of mental health services does your organization provide?
										</div>
										<div className='dataParty'>
											{currentOrganition?.type}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											12. How would you best describe the setting where you perform mental health services?
										</div>
										<div className='dataParty'>
											{currentOrganition?.setting}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											14. Is your organization a public private organization, or an NGO?
										</div>
										<div className='dataParty'>
											{currentOrganition?.public}
										</div>
									</div>
									<div className='tableRow'>
										<div className='titles'>
											21. What types of mental health concerns does your organization address?
										</div>
										<div className='dataParty'>
											{currentOrganition?.concerns}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											1.  What is the name and address of your organization?
										</div>
										<div className='dataParty'>
											{currentOrganition?.nameAddress}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											12. What is your website?
										</div>
										<div className='dataParty'>
											{currentOrganition?.website}
										</div>
									</div>

									<div className='tableRow'>
										<div className='titles'>
											13. What is your phone number?
										</div>
										<div className='dataParty'>
											{currentOrganition?.phoneNumber}
										</div>
									</div>
									<div className='tableRow'>
										<div className='titles'>
											15. Email address of contact persons
										</div>
										<div className='dataParty'>
											{currentOrganition?.eAddress}
										</div>
									</div>

								</div>




							</div>
						</div>
					</div>
				</section>
			</div >
			<Footer />
		</>

	);
}

export default ServiceDetail;
