import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from "react";
import { reStyles } from "../../reusableStyles";
<<<<<<< HEAD
import { UPDATE_APPLICATION } from "../../utils/mutations";
=======
>>>>>>> develop

export const DisplayCompanyData = (props) => {
    console.log('props.company------')
    console.log(props.company);
    console.log('props.newcompany---')
    console.log(props.newCompany)
    let tempcompany = {};
    if (props.company === null) {
        tempcompany = props.newCompany;
    } else {
        tempcompany = props.company;
    };
    let { company, date_applied, contact_name, contact_phone, contact_email, contact_website, response, coverletter } = props.newCompany

<<<<<<< HEAD
    const [updateApplication] = useMutation(UPDATE_APPLICATION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            console.log(props.company);
            console.log(props.company._id);
            const { data } = await updateApplication({
                variables: {
                    applicationId: props.company._id,
                    company: props.company.company,
                    contact_name: props.company.contact_name,
                    contact_email: props.company.contact_email,
                    contact_phone: props.company.contact_phone,
                    contact_website: props.company.contact_website,
                    response: props.company.response,
                    date_applied: props.company.date_applied,
                    cover_letter: props.company.cover_letter, 
                },
            });
            console.log(data);
        } catch (e) {
           console.error(e)
        }
    };

    useEffect(()=>{
        if(props.company){
        company = props.company.company;
        date_applied = props.company.date_applied;
        contact_name = props.company.contact_name;
        contact_phone = props.company.contact_phone;
        contact_email = props.company.contact_email;
        contact_website = props.company.contact_website;
        response = props.company.response;
        coverletter = props.company.cover_letter;
=======
    useEffect(() => {
        if (props.company) {
            company = props.company.company;
            date_applied = props.company.date_applied;
            contact_name = props.company.contact_name;
            contact_phone = props.company.contact_phone;
            contact_email = props.company.contact_email;
            contact_website = props.company.contact_website;
            response = props.company.response;
            coverletter = props.company.cover_letter;
>>>>>>> develop
        }
    }, [props.company])

    const [formState, setFormState] = useState({
        company: company,
        date_applied: format(new Date(date_applied), "yyyy-MM-dd"),
        contact_name: contact_name,
        contact_phone: contact_phone,
        contact_email: contact_email,
        contact_website: contact_website,
        response: format(new Date(response), "yyyy-MM-dd"),
        coverletterText: coverletter
    })

    useEffect(() => {
        setFormState(prevState => ({
            company: company,
            date_applied: format(new Date(date_applied), "yyyy-MM-dd"),
            contact_name: contact_name,
            contact_phone: contact_phone,
            contact_email: contact_email,
            contact_website: contact_website,
            response: format(new Date(response), "yyyy-MM-dd"),
            coverletterText: coverletter
        }));
    }, [props.company]);

    const style = {
        formItem: {
            ml: '0',
            mr: '0',
            mb: '20px',
            width: '100%',
            gap: '10px',
        },
        formBox: {
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'row'],
        },
        formTypography: {
            margin: ['20px', '20px', '20px'],
            color: 'text.secondary',
        }
    } 

    return (
        <Box
            sx={{
                ...reStyles.flexContainer,
                flex: 3,
                flexDirection: 'column',
                p: '50px',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: '80%',
                overflow: 'auto',
                overflowX: 'hidden',
                width: ['fit-content', '80%'],
            }}
        >

            <Typography sx={{ ...style.formTypography, }} variant='h4'>Company Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="Company-name"
                    label="Company Name"
                    multiline
                    value={formState.company}
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}

                />
                <TextField
                    type="date"
                    id="date-applied"
                    name="date-applied"
                    multiline
                    label="Date Applied"
                    value={formState.date_applied}
<<<<<<< HEAD
                    onChange={(e) => setFormState(prevstate => ({...prevstate, date_applied:e.target.value}))}
=======
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Typography sx={{ ...style.formTypography }} variant='h4'>Contact Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-name"
                    label="Contact Name"
                    multiline
                    value={formState.contact_name}
<<<<<<< HEAD
                    onChange={(e) => setFormState(prevstate => ({...prevstate, contact_name:e.target.value}))}
=======
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-phone"
                    label="Contact Phone"
                    multiline
                    value={formState.contact_phone}
<<<<<<< HEAD
                    onChange={(e) => setFormState(prevstate => ({...prevstate, contact_phone:e.target.value}))}
=======
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-email"
                    label="Contact Email"
                    multiline
                    value={formState.contact_email}
<<<<<<< HEAD
                    onChange={(e) => setFormState(prevstate => ({...prevstate, contact_email:e.target.value}))}
=======
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-website"
                    label="Contact Website"
                    multiline
                    value={formState.contact_website}
<<<<<<< HEAD
                    onChange={(e) => setFormState(prevstate => ({...prevstate, contact_website:e.target.value}))}
=======
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <TextField
                id="response"
                label="Response"
                multiline
                value={formState.response}
<<<<<<< HEAD
                onChange={(e) => setFormState(prevstate => ({...prevstate, response:e.target.value}))}
=======
                onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                sx={{ ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                InputLabelProps={{ shrink: true }}
            />
            <Typography sx={{ ...style.formTypography }} variant='h4'>Cover Letter</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Cover Letter"
                multiline
                rows={8}
                value={formState.coverletterText}
<<<<<<< HEAD
                onChange={(e) => setFormState(prevstate => ({...prevstate, coverletterText:e.target.value}))}
=======
                onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
>>>>>>> develop
                sx={{ ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                InputLabelProps={{ shrink: true }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                onClick={(event) => handleFormSubmit(event)}
            >
                {props.company.company == 'Add' ? 'Add Application' : 'Submit Changes'}
            </Button>
        </Box >
    )
}

// <a href={project.deployedLink !== null ? project.deployedLink : project.walkThrough} class="card-link btn btn-primary">{project.deployedLink !== null ? 'Deployed Application' : 'Walkthrough Video'}</a>
