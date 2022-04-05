import React from "react";
import UserLayout from "../../Components/Layouts/UserLayout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css"






const Faq = () => {
  return (
    <UserLayout>
      <div className="Row RowPadding Faq">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>1- HOW DO I SIGN UP ?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              -You begin by visiting any of our platforms then sign up using
              your personal email address or your institutional email address,
              fill your full name and create a strong password for your account
              - Login to your Dashboard then verify your account. - Upload your
              Valid School ID in case you don't have an institutional email
              address
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>2- HOW DO I CHANGE MY PASSWORD ?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              -Try the reset password features . -If you've tried that and you
              didn't receive it then try checking your spam folder. -If you are
              still having a problem contact us on support@wazodeals.com
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             3- HOW DO I KNOW IF I QUALIFY FOR WAZODEALS STUDENT DISCOUNTS OR NOT ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
- If you are students who attend university, colleges, polytechnics, C.o.e, private Universities and institutions within Nigeria and you have an institutional email address or you have a student ID card you qualify for a Wazodeals Students discounts account on our platforms
 - But you must be over 16 to be able to register and quality for Wazodeals Students discounts
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             4- CAN LECTURERS OR STAFFS FROM THE HIGHER INSTITUTIONS JOIN ?
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes Any Lecturer with an institutional email address or any staff with an institutional email address qualify for an account on our platforms
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
            5- I AM NOT A STUDENTS OR A LECTURER OR STAFF IN THE COLLEGES AND UNIVERSITIES AM I QUALIFIED TO CREATE AN ACCOUNT ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
 - For the mean time our platforms are for Students, Lecturers, institutional staffs we hope to serve people like you in the nearest future.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
 6- YOU DONT HAVE AN INSTITUTIONAL EMAIL ADDRESS ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                
Don't worry we got you covered just snap and upload your School ID and we shall verify it within 1-48hrs
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             7- WHAT HAPPENED WHEN MY REGISTRATION IS NOT ACCEPTED?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
 - It might be that you send a blurry image of your school ID or your institutional email address has typographical errors or not valid so which ever happened try to rectify from your end and try again.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             8- ARE YOU WAITING FOR ADMISSION OR DONT HAVE CREDENTIALS FROM AN INSTITUTION YET ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
 Don't panic you snap any of your credentials that fits our criteria such as your current Jamb slip, Current Waec or Neco Slip sighting all your serials in full without blurry we shall verify your account within 24-72hrs.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             9- HOW DO I REDEEM A CODES OR DISCOUNTS?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
 -To redeem a code or discount offer you must login to your Wazodeals account
  -For Coupons after login you can copy and paste on the Merchants/Retailers websites or in-store
-So also most Merchants/Retailers will ask you for your Verified ID in-store
 -For Online websites you don't have to panic as our Discounts is student-specific only students and some fees can have access to them.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
            10- MY CODE IS NOT APPLYING  IN MERCHANT WEBSITES AND IT GOT REJECTED IN-STORE ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
 - Try to recopy the code from our website then paste on the merchants website
 - if you codes get rejected it might be due to expired Coupons, elapsed time.
 -if you are having any issues related to this please don't hesitate to contact us to help further
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
             11- WHERE DO I APPLY THE CODE ON THE MERCHANT WEBSITES?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
 After proceeding on your cart you will see a place where it says apply promo code or coupons on the checkout page paste it or type it there it should be able to reflect in your final purchase price

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3> 12- THE DISCOUNTS % HAS CHANGED ?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes many In-store and Online Merchants should be able to change any % based on their own discretion because we don't usually issue the codes.
 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
13- HOW DO MY COMPANY JOIN ?

            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            If your company would like to join us in offering Students discounts and all other services we are offering our sales team would love to hear from you. Just fill out the contact form it should take you less than 5 mins and we would be in touch within 24hrs maximum. Or contact our customers care lines
            </Typography>
          </AccordionDetails>
        </Accordion>
       
      </div>
    </UserLayout>
  );
};

export default Faq;
