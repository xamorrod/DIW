import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, FormHelperText, useToast } from "@chakra-ui/react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "Cliente",
        message: "",
        email: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const toast = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        // Aquí iría la lógica de envío del correo (por ejemplo, con emailjs)
        setTimeout(() => {
            setSent(true);
            toast({
                title: "Mensaje Enviado",
                description: "Tu mensaje ha sido enviado correctamente.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setSending(false);
        }, 2000); // Simulando envío de mensaje
    };

    return (
        <Box p={6} boxShadow="lg" borderRadius="lg" maxWidth="500px" mx="auto" bg="brand.50" mt={8}>
            <Box textAlign="center" mb={6}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color:"#222"}}>Formulario de Contacto</h1>
            </Box>
            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <FormControl id="from_name" mb={4} isRequired>
                        <FormLabel color={"brand.600"}>Tu Nombre</FormLabel>
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleInputChange}
                            borderColor="brand.500"
                            _focus={{ borderColor: "brand.500" }}
                        />
                    </FormControl>

                    <FormControl id="email" mb={4} isRequired>
                        <FormLabel color={"brand.600"}>Tu Correo Electrónico</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            borderColor="gray.300"
                            _focus={{ borderColor: "brand.500" }}
                        />
                        <FormHelperText color={"brand.600"}>Nos pondremos en contacto contigo pronto.</FormHelperText>
                    </FormControl>

                    <FormControl id="message" mb={4} isRequired>
                        <FormLabel color={"brand.600"}>Mensaje</FormLabel>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            borderColor="gray.300"
                            _focus={{ borderColor: "brand.500" }}
                            resize="vertical"
                        />
                    </FormControl>

                    <Button
                        colorScheme="brand"
                        width="full"
                        type="submit"
                        isLoading={sending}
                        loadingText="Enviando..."
                        _hover={{ bg: "brand.300" }}
                        _active={{ bg: "brand.700" }}
                    >
                        Enviar Mensaje
                    </Button>
                </form>
            ) : (
                <Box textAlign="center" mt={4}>
                    <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
                </Box>
            )}
        </Box>
    );
};

export default ContactForm;
