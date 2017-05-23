// @flow
import React, { Component } from 'react';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import TitleSwitch from '../TitleSwitch';
import { pathPageMap } from '../../pages';
import icon from './icon.svg';
import './AppMain.scss';

class AppMainComponent extends Component {
  props: {
    brandHandler: () => void,
    children: React.Element<*>,
  };

  render() {
    const eActions = null;

    return (
      <Article>
        <Header
          fixed
          direction="row"
          size="large"
          pad={{ horizontal: 'medium', between: 'small' }}
          justify="between"
        >
          <Title
            a11yTitle="Open Menu"
            responsive={false}
            onClick={this.props.brandHandler}
          >
            <img
              className="AppMain-header-icon"
              src={icon}
              alt="Console Icon"
            />
            <TitleSwitch titles={pathPageMap} helmet={false} />
          </Title>
          <Box>
            {eActions}
          </Box>
        </Header>
        <Section pad="none">
          {this.props.children}
        </Section>
      </Article>
    );
  }
}

export default AppMainComponent;
