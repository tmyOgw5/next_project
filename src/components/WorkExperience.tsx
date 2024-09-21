import { Box, Text } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

interface WorkExperienceProps {
  id: number;
  jobTitle: string;
  companyName: string;
  date: string;
}

const WorkExperience = ({ works }: { works: WorkExperienceProps[] }) => {
  return (
    <Box margin="20px">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb="10px"
        bgGradient="linear(to-t, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)"
        bgClip="text"
      >
        Work Experience
      </Text>
      <UnorderedList fontSize="xl">
        {works
          .slice()
          .reverse()
          .map((work) => (
            <ListItem key={work.id} mb={4}>
              <h2>
                <Box as="span" flex="1" textAlign="left">
                  {work.jobTitle}
                  {work.jobTitle && work.companyName && ",  "}
                  {work.companyName}
                  <Text fontSize="md" color="gray.600">
                    {work.date}
                  </Text>
                </Box>
              </h2>
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default WorkExperience;
