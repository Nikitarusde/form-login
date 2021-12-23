import "./auth-page.css";
import React from "react";
import Typography from '@mui/material/Typography';
import {AuthForm} from "./auth-form/auth-form";


export const AuthPage: React.FC = () => {
  return (
      <div className="auth-page">
          <AuthForm />
          <Typography variant="h4" component="div" gutterBottom={true} className="auth">
              h1. Heading
          </Typography>
      </div>
  )
}