import {
  Card,
  Button,
  SimpleGrid,
  Heading,
  Text,
  Image,
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
} from "@chakra-ui/react";
import React, { useState } from "react";

interface WorksContentsProps {
  id: number;
  title: string;
  modalContent: string;
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
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        width={{ base: "100%", md: "100%", lg: "80%" }}
      >
        {works.map((work) => (
          <Card key={work.id} boxShadow={"md"} _hover={{ shadow: "lg" }}>
            <CardHeader>
              <Heading size="md">{work.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{work.modalContent}</Text>
            </CardBody>

            <CardFooter>
              <Button onClick={() => handleViewDetails(work)}>View here</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      {/* ポップアップ（モーダル） */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedWork?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedWork && (
              <>
                <Image
                  src={selectedWork.imageUrl}
                  alt={selectedWork.title}
                  borderRadius="lg"
                />
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
