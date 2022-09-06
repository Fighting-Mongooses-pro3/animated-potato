import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from "next";
import { Container, Page, Sidebar } from '../components';

const Budget: GetStaticProps  = () => {

    return(
        <Page currentPage='Budget' meta={{ desc: 'Create your budget!' }}>
        <Container customCss='min-h-screen w-full border-lime-500 border'>
        <Sidebar />
        </Container>
        </Page>
    )
}

export default Budget