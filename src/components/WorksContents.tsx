import {
  Box,
  Card,
  Button,
  Heading,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  CardHeader,
  VStack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface WorksContentsProps {
  id: number;
  jobTitle: string;
  companyName: string;
  date: string;
  modalContent: string;
  techStack: string;
  imageUrl?: string;
  link?: string;
}

const WorksContents = ({ works }: { works: WorksContentsProps[] }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<WorksContentsProps | null>(
    null
  );

  // 選択したプロジェクトをセットし、モーダルを開く
  const handleViewDetails = (Work: WorksContentsProps) => {
    setSelectedWork(Work);
    setIsModalOpen(true);
  };

  // モーダルを閉じる
  const handleCloseModal = () => {
    setSelectedWork(null);
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <VStack
        spacing={8}
        align="stretch"
        width={{ base: "100%", md: "100%", lg: "80%" }}
      >
        {works
          .slice()
          .reverse()
          .map((work) => (
            <Box
              key={work.id}
              bgGradient="linear(to-l, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)"
              p="2px" // 枠の太さを調整
              borderRadius="md" // 枠の角を丸める場合
              _hover={{ boxShadow: "lg" }}
            >
              <Card
                key={work.id}
                boxShadow={"md"}
                _hover={{ shadow: "lg" }}
                bg="white"
              >
                <CardHeader>
                  <Heading size="md">{work.jobTitle}</Heading>
                  <Text fontSize="md" color="gray.600" mb={2} mt={2}>
                    {work.companyName}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mb={4} mt={2}>
                    {work.date}
                  </Text>
                  <Image src={work.techStack} alt="skill-icons" mb={4} />
                  <Button onClick={() => handleViewDetails(work)}>
                    View details
                  </Button>
                </CardHeader>
              </Card>
            </Box>
          ))}
      </VStack>

      {/* ポップアップ（モーダル） */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedWork?.jobTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedWork && (
              <>
                {selectedWork.imageUrl && (
                  <Image src={selectedWork.imageUrl} alt="work-image" />
                )}
                <Text marginTop={"1rem"} whiteSpace="pre-line">
                  {selectedWork.modalContent}
                </Text>
                {selectedWork.link && (
                  <Link href={selectedWork.link} isExternal color={"blue.400"}>
                    {selectedWork.link}
                  </Link>
                )}
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default WorksContents;
