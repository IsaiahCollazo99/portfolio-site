import { Button } from '@material-ui/core';
import React from 'react';
import { useInput } from '../../util/customHooks/custhomHooks';
import CustomTextField from '../CustomTextField';

const EmailForm = () => {
    const useName = useInput("");
    const useEmail = useInput("");
    const useMessage = useInput("");

    return (
        <form className="emailForm" autoComplete="off" action="https://formspree.io/mjvaklbn" method="POST" name="emailForm">

            <div className="userInfo">
                <CustomTextField 
                    type="text" 
                    {...useName} 
                    placeholder="Enter Your Name" 
                    name="name" 
                    label="Name"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{width: '45%'}}
                    required 
                />

                <CustomTextField 
                    type="email" 
                    {...useEmail} 
                    placeholder="Enter Your Email" 
                    name="_replyto" 
                    required 
                    label="Email"
                    variant="outlined"
                    style={{width: '45%'}}
                    InputLabelProps={{
                        shrink: true,
                    }}    
                />
            </div>

            <CustomTextField 
                {...useMessage} 
                placeholder="Enter Your Message" 
                name="message" 
                required 
                rows={10}
                label="Message"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                    shrink: true
                }}
                multiline
            />

            <Button
                variant="contained"
                fullWidth
                type="submit"
                color="primary"
            >
                Send Message
            </Button>
        </form>
    )
}

export default EmailForm;