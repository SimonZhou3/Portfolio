// @ts-ignore
import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { LuSunMedium } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

import { Logo } from '../Logo';
import { Link } from '../Link';
import { Theme, ActionType, useGlobalState } from '../../context';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import * as classes from './style.module.css';

export function Footer(): React.ReactElement {
    const { globalState, dispatch } = useGlobalState();
    const siteConfiguration = useSiteConfiguration();
    const darkModeEnabled = globalState.theme === Theme.Dark;

    const handleToggleChange = (event) => {
        const newTheme: Theme = event.target.checked ? Theme.Dark : Theme.Light;
        dispatch({type: ActionType.SetTheme, value: newTheme});
    }

    return (
        <footer
            className={classes.Footer}
            style={{
                background: 'var(--primary-color)',
                borderTop: darkModeEnabled ? '3px solid var(--box-shadow-hover-color)' : undefined,
            }}
        >
            <div className={classes.ContentWrapper}>
                <Link to="/" aria-label="home">
                    <Logo
                        fontSize="1.5rem"
                        color={'var(--background-color)'}
                        theme={Theme.Dark}
                    />
                </Link>
                   <ul className={classes.Recognition}>
                       <li> Edited by Simon Zhou</li>
                       <li> © Copyright 2023</li>
                       <li> Created by Gatsby</li>
                   </ul>
                    <label>
                        <Toggle
                            defaultChecked={darkModeEnabled ? true : false}
                            onChange={handleToggleChange}
                            name="data-theme"
                        />

                    </label>
            </div>
        </footer>
    );
}
