import NextLink from 'next/link'
import { 
    Link,
    Button,
    Container, 
    Box, 
    Heading, 
    Image,
    List,
    ListItem,
    useColorModeValue ,
    chakra
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import {
  ILogoTwitter,
  ILogoInstagram,
  ILogoGithub,
  ILogoDiscord
} from '@chakra-ui/icons'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="useColorModeValue('whiteAlpha.500', 'whiteAlpha.200)" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in India!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Vaibhav Sathe
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer )</p>
                </Box>
                <Box flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
                >
                  <Image 
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/vaibhav.jpg"
                  alt="Profile Image"
                  />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant='section-title'>
                    Work
                </Heading>
                <Paragraph>Vaibhav is a freelance and full-stack developer
         based in Pune with passion for building programs, 
        digital services/stuff he wants. He has knack for all things
        illustrates, creating amazing visuals with after effects,
        from planning and designing all the way to solving real-life
        problems with code.</Paragraph>
        <Box align='center' my={4}>
      <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
        My portfolio
        </Button>
        </Box>
            </Section>
            <Section delay={0.2}>
      <Heading as='h3' variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>2003</BioYear>
        ,  Born in Burhanpur, India.
      </BioSection>
      <BioSection>
        <BioYear>2022</BioYear>
        ,  Completed schooling from Nutan Highschool, Malkapur.
      </BioSection>
       <BioSection>
        <BioYear>2023</BioYear>
        ,  Studing in PGMCOE, Pune.
       </BioSection>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I ❤️
      </Heading>
      <Paragraph>
        Anime, {''}
        <Link href="https://open.spotify.com/user/31sjljdvll2f6fdmqnptuoowazbq?si=HtHIfv7-QH2v3pK5YzvSGg">
          Music
        </Link>
      </Paragraph>
    </Section>
    
    
        </Container>
    )
}

export default Page