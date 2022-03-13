import React from "react";
import { Cont, HeadLine, Sep } from "../styles/ListProduct1_styles";
import { Part, ComentCont, Text, Pic } from "../styles/Opinios_styles";

const Opinions = () => {
  return (
    <div>
      <Cont>
        <HeadLine>Opiniones de clientes</HeadLine>
        <br />
        <Sep />
        <Part>
          <ComentCont>
            <Pic
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646758052/Sprint%203/Profile1_cfzxgq.svg"
              alt="prof"
            />
            <Text>Amazon Customer</Text>
            <Text>
              Electronic view finder is supposed to be the best, but from 5
              minutes of playing with the camera, EVF is very disappointing -
              despite 120Hz refresh rate, the image is very choppy and laggy,
              almost like watching a retro video game - nauseating. That, and
              the build quality compared to 5D Mark III feels very cheap - too
              much plastic. There are some good features though, like
              auto-focus, high quality video, etc. 
              <br />
              <br />
              UPDATE: The EVF appears to be
              definitely glitchy. Stuttering aside, 2-3 times, when it was
              supposed to turn on by face proximity, it flashed a white thick
              line on its upper edge, and then remained dark. Maybe I got a
              defective unit.
            </Text>
            <Pic
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646758052/Sprint%203/Profile2_c1janx.svg"
              alt="prof"
            />
            <Text>Amazon Customer</Text>
            <Text>
              Long-time Canon DSLR user finally made the switch to mirrorless
              and now won't look back. Amazing piece of technology - focus
              system and low-light performance are astounding. Love that I can
              use my EF lenses with adapter and 24-105 f4 L "kit lens" is a
              worthy successor to its EF counterpart.
              <br />
              <br />
              My biggest quandary, like many, was whether I needed the extra
              pixels of the R5. Coming from a 20 MP original Canon 6D I'm
              comfortable with this sensor size. For my uses hits the sweet spot
              between image quality and speed/disk space. For birds-in-flight I
              do miss the extra crop room, but have a hard time justifying the
              extra $1,500 just for that.
            </Text>
          </ComentCont>
        </Part>
      </Cont>
    </div>
  );
};

export default Opinions;
