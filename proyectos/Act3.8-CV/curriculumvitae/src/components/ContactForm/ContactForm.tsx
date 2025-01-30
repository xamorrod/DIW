import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, FormHelperText } from "@chakra-ui/react";
import emailjs from 'emailjs-com';
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
    const { t } = useTranslation();
    
    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "",
        message: "",
        email: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            to_name: name === "from_name" ? value : formData.to_name,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .send(
                "service_i2gaioo",
                "template_xj5nmd7",
                formData,
                "dQWwUPTTaWi9j13x9"
            )
            .then(
                (response) => {
                    console.log("Correo enviado exitosamente:", response);
                    setSent(true);
                    setError(false);
                },
                (error) => {
                    console.error("Error al enviar el correo:", error);
                    setError(true);
                }
            )
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <Box p={6} boxShadow="lg" borderRadius="lg" maxWidth="500px" mx="auto" bg="brand.50" mt={8}>
            <Box textAlign="center" mb={6}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#222", fontFamily: "roboto, sans-serif" }}> {t('ContactHeader')}</h1>
            </Box>
            
            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <FormControl id="from_name" mb={4} isRequired>
                        <FormLabel color={"brand.600"} fontFamily="roboto, sans-serif"> {t('ContactIntro')}</FormLabel>
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleInputChange}
                            borderColor="brand.500"
                            _focus={{ borderColor: "brand.500" }}
                            color="brand.600"
                            fontFamily="roboto, sans-serif"
                        />
                    </FormControl>

                    <FormControl id="email" mb={4} isRequired>
                        <FormLabel color={"brand.600"} fontFamily="roboto, sans-serif"> {t('ContactMail')}</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            borderColor="gray.300"
                            _focus={{ borderColor: "brand.500" }}
                            color="brand.600"
                            fontFamily="roboto, sans-serif"
                        />
                        <FormHelperText color={"brand.600"} fontFamily="roboto, sans-serif"> {t('ContactCTA')}</FormHelperText>
                    </FormControl>

                    <FormControl id="message" mb={4} isRequired>
                        <FormLabel color={"brand.600"} fontFamily="roboto, sans-serif"> {t('ContactMessage')}</FormLabel>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            borderColor="gray.300"
                            _focus={{ borderColor: "brand.500" }}
                            resize="vertical"
                            color="brand.600"
                            fontFamily="roboto, sans-serif"
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
                        fontFamily="roboto, sans-serif"
                    >
                        {t('ContactSendMessage')}
                    </Button>

                    {error && <ErrorAlert />}
                    {sent && !error && <SuccessAlert />}
                </form>
                
            ) : (
                <Box textAlign="center" mt={4} color={"brand.600"} fontFamily="roboto, sans-serif">
                        <p> {t('ContactGreeting')}</p>
                </Box>
            )}
        </Box>
    );
};

export default ContactForm;
