import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>Bienvenidos a la guía completa sobre peri 2024</p>
      <p>
        Personalmente hacer este proyecto solo me ha hecho tener dolor emocional
        y mental cero recomendado y ayuda con esta carrera.
      </p>
    </Content>
  </Main>
);

export default About;
