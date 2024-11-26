import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {Animation} from '../../components/Animation';
import {Section} from '../../components/Section';
import {PageSection} from '../../types';

import * as classes from './style.module.css';

export default function ExperienceSection(props: PageSection): React.ReactElement {

    return (
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading} additionalClasses={[classes.Experiences]}>
                <h3> Present </h3>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(204,9,47)', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(204,9,47)'}}
                        date="January 2022 - June 2022"
                        dateClassName={classes.Date}
                        iconStyle={{background: 'rgb(204,9,47)', color: '#fff'}}
                    >
                        <h3 className={`vertical-timeline-element-title ${classes.Title}`}>Software Developer Co-op </h3>
                        <h4 className={`vertical-timeline-element-subtitle ${classes.Title}`}>Global Relay</h4>
                        <ul className={classes.Responsibilities}>
                            <li>Contributed towards the development of a distributed message compliance software using Java, Kafka, Cassandra, and Docker,
                                used by over 20,000 customers daily, to archive 1 TB messages/day
                            </li>
                            <li>Improved code infrastructure and scalability by developing a on-disk cache to reduce the load of RPC calls between services
                                storing intangible data as compressed bytes and securing data with AES-256-GCM encryption
                            </li>
                            <li> Developed a Fabric deployment script for a microservice, enabling developers to deploy builds to test and production environments
                            </li>
                            <li> Improved the build pipeline on Jenkins by integrating automated formatting checks and implementing logging for flaky tests,
                                enhancing build reliability and debugging efficiency
                            </li>
                        </ul>
                        <p>
                            Java, Typescript, Jenkins, Kafka
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(204,9,47)', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(204,9,47)'}}
                        date="January 2022 - June 2022"
                        dateClassName={classes.Date}
                        iconStyle={{background: 'rgb(204,9,47)', color: '#fff'}}
                    >
                        <h3 className={`vertical-timeline-element-title ${classes.Title}`}>Junior Software Developer Co-op </h3>
                        <h4 className={`vertical-timeline-element-subtitle ${classes.Title}`}>St. George's School</h4>
                            <ul className={classes.Responsibilities}>
                                <li> Participated in the development of a comprehensive full-stack web application,
                                    accommodating thousands of users, and utilizing
                                    CSS/HTML, JavaScript, PHP, and Symfony
                                </li>
                                <li> Contributed to security enhancements, collaborated on frontend improvements, and
                                    played a role in the successful migration of
                                    legacy code to the new codebase
                                </li>
                                <li> Sustained the functionality of management, authentication, and financial reporting
                                    systems through the application of industry best
                                    practices and the implementation of object-oriented principles
                                </li>
                                <li> Developed integration, functional, and regression tests across the codebase,
                                    leveraging PHPUnit to ensure stability and reliability
                                </li>
                            </ul>
                        <p>
                            React, JavaScript, MySQL, PHP, Symfony, Jquery
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </Section>
        </Animation>
    );
}
