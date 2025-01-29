import React, { useState } from "react";
import { Input, Button, Textarea, Box, FormControl, FormLabel, FormHelperText} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import ErrorAlert from "./ErrorAlert";
import SuccesAlert from "./SuccessAlert";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "Cliente",
        message: "",
        email: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);


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
                    <SuccesAlert />

                },
                (error) => {

                    console.error("Error al enviar el correo:", error);
                    <ErrorAlert />

                }
            )
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <Box p={6} boxShadow="md" borderRadius="lg" maxWidth="500px" mx="auto" >
            <h1>Formulario de Contacto</h1>
            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <FormControl id="from_name" mb={4} isRequired>
                        <FormLabel>Tu Nombre</FormLabel>
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id="email" mb={4} isRequired>
                        <FormLabel>Tu Correo Electrónico</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <FormHelperText>Nos pondremos en contacto contigo pronto.</FormHelperText>
                    </FormControl>

                    <FormControl id="message" mb={4} isRequired>
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <Button
                        colorScheme="teal"
                        width="full"
                        type="submit"
                        isLoading={sending}
                        loadingText="Enviando..."
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
