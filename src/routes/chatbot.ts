import RoboIcon from '$lib/assets/robot-icon.png';
import UserIcon from '$lib/assets/user-icon.png';

export async function initializeChatbot() {
    try {
        //@ts-ignore
        const { default: Chatbot } = await import('https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js');
        Chatbot.init({
            chatflowid: "51e2649a-2f31-4726-bc4a-28600859239c",
            apiHost: "https://flowiseai-railway-production-db20.up.railway.app",
            theme: {
                chatWindow: {
                    showTitle: true,
                    title: 'Atendente',
                    titleAvatarSrc: RoboIcon,
                    showAgentMessages: false,
                    welcomeMessage: 'Olá! Bem vindo(a) ao site da Ana!',
                    errorMessage: 'Ops! Algo deu errado :/ Entre em contato com a Ana.',
                    backgroundColor: "#ffffff",
                    // backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
                    height: 700,
                    width: 400,
                    fontSize: 14,
                    //starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
                    starterPromptFontSize: 14,
                    clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads.
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: RoboIcon,
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: UserIcon,
                    },
                    textInput: {
                        placeholder: 'Digite sua mensagem',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'O limite é de 50 caracteres.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true. 
                    }
                }
            }
        });
    } catch (error) {
        console.error('Failed to load Chatbot script:', error);
    }
}