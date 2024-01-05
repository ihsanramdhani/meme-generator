'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import styles from './meme.module.css';
import Image from 'next/image';

interface Meme {
  topText: string;
  bottomText: string;
  url: string;
}

export const MemeLayout = () => {
  const [meme, setMeme] = useState<Meme>({
    topText: '',
    bottomText: '',
    url: 'https://i.imgflip.com/1bij.jpg',
  });
  const [allMemes, setAllMemes] = useState<Meme[]>([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    console.log('im here');
    const url = allMemes[randomNumber].url;
    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      url: url,
    }));
  }

  return (
    <>
      <div className={styles['form']}>
        <input
          type="text"
          placeholder="Top text"
          className={styles['form--input']}
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={styles['form--input']}
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className={styles['form--button']} onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className={styles['meme']}>
        <Image
          src={meme.url}
          alt="meme image"
          className={styles['meme--image']}
          width={500}
          height={300}
        ></Image>
        <h2 className={styles['meme--text--top']}>{meme.topText}</h2>
        <h2 className={styles['meme--text--bottom']}>
          {meme.bottomText}
        </h2>
      </div>
    </>
  );
};

export default MemeLayout;
