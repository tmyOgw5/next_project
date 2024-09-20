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
  CardBody,
  CardFooter,
  VStack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface WorksContentsProps {
  id: number;
  title: string;
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
        mt={8}
      >
        {works.map((work) => (
          <Box
            key={work.id}
            bgGradient="linear(to-l, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)}"
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
                <Heading size="md">{work.title}</Heading>
              </CardHeader>
              <CardBody>
                <Image src={work.techStack} alt="skill-icons" />
              </CardBody>
              <CardFooter>
                <Button onClick={() => handleViewDetails(work)}>
                  View here
                </Button>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </VStack>

      {/* ポップアップ（モーダル） */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedWork?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedWork && (
              <>
                <Text marginTop={"1rem"}>{selectedWork.modalContent}</Text>
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
