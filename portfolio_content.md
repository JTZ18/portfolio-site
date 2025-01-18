## 1. AutoDating as a Service (October 2022)

### Overview
I created “AutoDating as a Service” as a solo developer, leveraging GPT-3 to automatically reply to matches on popular dating platforms like Tinder and Bumble. This project emerged from my curiosity about automating personal interactions in a fun, experimental manner.

### Motivation
• I wanted to explore prompt engineering and test how GPT-3 could handle nuanced or casual dialogues (like dating app conversations).  
• Using real-world data pipelines, I aimed to push the boundaries of what a small-scale microservice could accomplish.

### What I Built
• A system that scrapes and transforms dating app data (profiles, messages) into JSON format, then stores it in AWS DynamoDB.  
• Dockerized microservices to automate cron jobs running on AWS Lambda for tasks like auto-swiping and sending AI-generated replies.  
• Incorporated a wide range of prompt templates to better capture different conversation styles and contexts.

### Key Achievements
• Explored fundamental prompt engineering techniques, crucial for generating context-aware replies.  
• Deployed a scalable architecture by combining AWS services like DynamoDB, CloudWatch, S3, and Lambda.  
• Demonstrated how AI can be used for creative, if somewhat unconventional, applications.

### Tech Stack
• Docker, AWS Lambda, AWS DynamoDB, AWS CloudWatch, AWS S3  
• GPT-3 API  
• Python  

### Lessons Learned
• Handling user data and personal conversations raises important ethical and privacy considerations.  
• Optimizing prompts is essential for generating coherent, relevant replies.  
• Building modular microservices with AWS Lambda provided a flexible, cost-effective solution.

---

## 2. Deepfake Real-Time Visual Audio (November 2022)

### Overview
In this project, I used open-source tools like DeepFaceLive from DeepFaceLabs to perform real-time face swaps on live video feeds. My primary objective was to understand the complexities and ethical implications of deepfake technology by experimenting with face embeddings and voice cloning.

### Motivation
• I wanted to gain hands-on experience with real-time video processing and face recognition tools.  
• The project allowed me to investigate the boundaries of synthetic media and its potential for misuse or beneficial applications.

### What I Built
• Leveraged DeepFaceLive to handle real-time face swapping on video feeds using pretrained embeddings.  
• Experimented with CoquiTTS for voice cloning but ultimately chose Voice.ai for more effective real-time audio modifications.

### Key Achievements
• Acquired in-depth knowledge of face embedding, image processing, and voice cloning workflows.  
• Explored the robust tooling available for deepfake creation, fostering an understanding of both the potential use cases and the ethical dilemmas.

### Tech Stack
• DeepFaceLive, DeepFaceLabs (pretrained face embeddings)  
• Voice.ai, CoquiTTS  
• Python

### Lessons Learned
• Fine-tuning face and audio models for real-time performance requires careful optimization.  
• The ethical boundaries of deepfake technology are significant—user consent and responsible usage are paramount.

---

## 3. Drone Computer Vision Control via Hand Gestures (December 2022)

### Overview
I developed a computer vision system that recognizes hand gestures to pilot a DJI Pytello drone. This proof-of-concept project showcases the potential of AI-driven gesture control in robotics.

### Motivation
• Exploring how CV-based control systems can simplify and enhance human-robot interaction.  
• Investigating lightweight machine learning solutions (like TensorFlow Lite) for resource-limited edge devices.

### What I Built
• A hand-gesture recognition pipeline using Google Mediapipe for detecting hand keypoints.  
• Custom TFLite models trained with a specialized dataset of hand signals to map gestures to drone commands.  
• Python scripts that interface with the DJI Pytello for flight operations.

### Key Achievements
• Demonstrated practical, real-time gesture detection for controlling a physical device.  
• Optimized TFLite models for edge deployability, ensuring smooth drone responsiveness.

### Tech Stack
• Google Mediapipe  
• TensorFlow Lite  
• DJI Pytello (Python SDK)  
• Python for data collection, model training, and system orchestration

### Lessons Learned
• Real-time control demands efficient and lightweight inference models.  
• Noise filtering and robust gesture segmentation were critical for consistent drone maneuvers.

---

## 4. StoryReader (October 2023)

### Overview
StoryReader is an MVP I created to convert PDFs into audiobooks. The idea was to quickly and accurately transform text documents into high-quality audio narratives.

### Motivation
• Offering an accessible reading experience, especially for long-form PDF content.  
• Experimenting with text-to-speech models like ElevenLabs to achieve human-like audio output.

### What I Built
• A Next.js frontend equipped with TailwindCSS and DaisyUI for the user interface.  
• Supabase for data storage and user authentication via single sign-on systems (e.g., Google).  
• An integration with the ElevenLabs API for high-quality text-to-speech conversion.

### Key Achievements
• Demonstrated proof-of-concept for quick and user-friendly PDF-to-audio conversion.  
• Showcased full-stack skills: from UI design to backend data management.

### Tech Stack
• Next.js, TailwindCSS, DaisyUI  
• Supabase (PostgresSQL, user auth)  
• ElevenLabs API

### Lessons Learned
• Achieving a natural voice output is highly dependent on the TTS model’s training quality.  
• Users appreciate a clean and minimal UI when converting or listening to long texts.

---

## 5. Generating Realistic and Consistent Characters (December 2023)

### Overview
As part of my exploration into Stable Diffusion and other diffusion-based generative models, I embarked on a project to build AI “influencers.” This involved generating consistent character images with stable facial features and styling cues across multiple outputs.

### Motivation
• Investigating how DreamBooth fine-tuning and LoRA training can achieve more accurate and consistent character generation.  
• Creating unique “virtual personas” for potential applications in marketing or creative storytelling.

### What I Built
• Leveraged open-source variations of Stable Diffusion from CivitAI.  
• Combined DreamBooth fine-tuning and LoRA training techniques to ensure a single character remains consistent across different prompts.  
• Explored Image Prompt Adapters to refine face embeddings and produce stable personas at scale.

### Key Achievements
• Learned to systematically train and finetune stable diffusion models for consistent outputs.  
• Gained deeper insights into how face embeddings and prompt adapters influence generation fidelity.

### Tech Stack
• StableDiffusion, DreamBooth, LoRA, IP Adapters  
• Automatic1111, ComfyUI (workflow automation and image generation)  
• Python

### Lessons Learned
• Fine-tuning custom embeddings is delicate—model drift can happen quickly.  
• Parameter tuning is crucial to avoid artifacts or distorted elements in generated images.

---

## 6. Fake Image and Document Detection - Final Year Project (December 2023)

### Overview
My final year project centered on detecting fake or forged images and documents using state-of-the-art (SOTA) models. This involved training and refining various architectures, including GANs and CNNs, to identify manipulations like copy-move, slicing, and diffusion-based transformations.

### Motivation
• The rise of synthetic media and misinformation inspired me to create robust detection methods.  
• Gaining valuable experience in MLOps pipelines, from experimentation to real-time deployment.

### What I Built
• A pipeline that trains, fine-tunes, and evaluates SOTA detection models (GANs, CNNs).  
• Integrated Weights & Biases for experiment tracking and HuggingFace for artifact management.  
• Deployed optimized models on Nvidia Triton Inference Server to achieve a 4x speed improvement in real-time predictions.

### Key Achievements
• Demonstrated a comprehensive MLOps workflow, ensuring reproducible model training and deployment.  
• Significantly reduced inference latency, making the system viable for real-world, on-the-fly detection scenarios.

### Tech Stack
• PyTorch, MLFlow, DVC  
• Triton Inference Server, HuggingFace, Weights & Biases  
• Python

### Lessons Learned
• Building and maintaining MLOps pipelines drastically improves team productivity and project scalability.  
• Performance tuning on the inference side is just as critical as model accuracy.

---

## 7. Church Volunteer Help Desk Service Response LLM (March 2024)

### Overview
I developed a prototype LLM-based help desk tool that provides templated reply suggestions for volunteer inquiries. Using historical Zendesk conversations, I fine-tuned a local LLM to match the church’s brand and tone.

### Motivation
• Real-world demonstration of how generative AI can reduce the time spent drafting repetitive email or chat replies.  
• Experimenting with techniques for LLM alignment to a specific organizational voice.

### What I Built
• Data ingestion pipeline that extracts and cleans historical Zendesk inquiries, transforming them into QA pairs.  
• Fine-tuned the open-source NousHermes2-Pro-Mistral 7B model via PEFT LoRA for brand-consistent responses.  
• Integrated RAG with a PDF ingestion workflow for better grounded and accurate replies.

### Key Achievements
• Successfully tested a local LLM deployment (using tools like Ollama and Llamafile) for cost-effective, on-premise solutions.  
• Demonstrated higher answer accuracy and user satisfaction compared to a generic, out-of-the-box model.

### Tech Stack
• PEFT, LoRA, Fine-tuning,  
• Langchain, Ollama  
• ChromaDB (Vector Stores), Embedding Models, HuggingFace

### Lessons Learned
• Tailoring an LLM to a specific brand voice involves carefully curated training data and iterative fine-tuning.  
• RAG workflows significantly improve factual correctness and user trust.

---

## 8. Temasek GenAI Hackathon - First Runner-Up (March 2024)

### Overview
During the Temasek GenAI Hackathon, my team and I built a solution for transcribing and summarizing audio-video (AV) content. We integrated multiple open-source LLMs and used RAG pipelines to demonstrate how large amounts of audio data could be distilled into concise formats.

### Motivation
• Exploring advanced transcription workflows that leverage open-source models like Whisper-MLX and Whisper-X for more efficient ASR.  
• Investigating how to best incorporate RAG to boost retrieval accuracy and summarization quality.

### What We Built
• A pipeline that transcribes AV data with Whisper variants, applying chunking strategies to handle large files.  
• Deployed different open-source LLMs, such as NousHermes Mixtral 8x7B, for summarization and retrieval tasks.  
• Packaged a Streamlit-based UI enabling users to query transcripts with source timestamp citations.

### Key Achievements
• Achieved a high retrieval accuracy, thanks to experimentation with vector stores like ChromaDB and FAISS.  
• Won First Runner-Up, validating the potential of open-source LLM solutions for enterprise-level voice-data tasks.

### Tech Stack
• Whisper, Langchain, RAG  
• ChromaDB, FAISS (Vector stores)  
• Streamlit

### Lessons Learned
• Combining multiple open-source models can yield results comparable to commercial APIs.  
• Proper chunking and caching strategies are essential when dealing with large media files.

---

## 9. Temasek Trust - Real-Time Transcription Report Generation (April 2024)

### Overview
I built a tool for transcribing live fireside chat sessions and generating summary reports. By leveraging multiple AI agents, the system provided real-time insights into philanthropic event discussions.

### Motivation
• Removing the friction in note-taking and ensuring actionable insights during and after live events.  
• Showcase advanced multi-agent orchestration for quickly parsing large volumes of spoken dialogue.

### What I Built
• An ASR workflow using AssemblyAI to convert audio/video streams into raw text.  
• A multi-agent system orchestrated by CrewAI for generating coherent, role-specific summaries.

### Key Achievements
• Enabled near-instantaneous transcription and summary generation of presentations and Q&As.  
• Tailored the tool for philanthropic contexts, ensuring clarity and brand-appropriate language.

### Tech Stack
• AssemblyAI, Whisper  
• CrewAI, HuggingFace, Streamlit  
• Claude-3-Opus, Ollama

### Lessons Learned
• Real-time AI services require robust error handling, especially under unpredictable network conditions.  
• Orchestrating multi-agent pipelines allows for modular enhancements as use cases evolve.

---

## 10. Stanjenn Technologies - RAG Pipeline (April 2024)

### Overview
Under a freelance contract, I improved Stanjenn Technologies’ Retrieval-Augmented Generation (RAG) chatbot performance on Telegram and Whatsapp. By upgrading their retrieval model, I boosted precision in domain-specific queries.

### Motivation
• Clients demand highly accurate, context-based responses for specialized customer inquiries.  
• RAG-based solutions can drastically reduce the time it takes to find relevant information.

### What I Did
• Implemented ColBERT, a powerful retrieval mechanism, to replace their existing baseline model.  
• Fine-tuned embedding strategies for more robust domain alignment.

### Key Achievements
• Significantly enhanced the chatbot’s relevance and correctness by improving retrieval.  
• Demonstrated how high-performing open-source models can outperform generic solutions in specialized use cases.

### Tech Stack
• Node.js, MongoDB, Langchain.JS  
• GPT-3.5-turbo  
• ColBERT

### Lessons Learned
• The right retrieval model can drastically shift user satisfaction scores in chatbot applications.  
• Maintaining domain-specific embeddings is critical for ongoing accuracy.

---

## 11. TripSnips - TikTok GenAI Hackathon Finalists (June 2024)

### Overview
TripSnips is an app designed to extract key travel details from social media posts, particularly TikTok videos. We built robust AI workflows that transform unstructured social media content into actionable travel insights.

### Motivation
• Travel planning often involves scanning multiple videos for relevant details—hotels, restaurants, must-visit spots.  
• Automated extraction helps travelers plan more efficiently and avoid information overload.

### What We Built
• Google Gemini Multimodal for analyzing videos and extracting structured data.  
• Langchain-based prompt chaining to efficiently parse and regenerate content in a user-friendly format.  
• A Next.js/TailwindCSS/DaisyUI frontend, combined with a FastAPI backend deployed on Google Cloud Run for serverless scalability.

### Key Achievements
• Became finalists at the TikTok GenAI Hackathon, validating our approach to simplifying travel research.  
• Showcased a smooth, serverless deployment pipeline using Docker containers.

### Tech Stack
• Next.js, NextAuth, TailwindCSS, DaisyUI  
• FastAPI, Docker, Google Cloud Run  
• Langchain, Google GenAI (Gemini)

### Lessons Learned
• Handling fast-paced, user-generated content requires robust video analysis frameworks.  
• Serverless architectures are ideal for quick scale-ups and scale-downs during hackathons or launch phases.

---

## 12. GovTech AI CTF - Hackathon Finalists (November 2024)

### Overview
I participated in a Jeopardy-style AI Capture the Flag hosted by GovTech. This event emphasized adversarial AI techniques, pitting participants against carefully designed security tasks across multiple domains.

### Motivation
• Developing a deeper understanding of AI adversarial attacks and defenses.  
• Experimenting with creative ways to jailbreak or prompt-hack LLMs.

### Challenges
• Prompt hacking and injection to “jailbreak” LLM restrictions for hidden flags.  
• Leveraging adversarial perturbations in vision models to identify concealed data.

### Key Achievements
• Achieved a finalist position, demonstrating strong knowledge in AI security and adversarial tactics.  
• Learned advanced prompt segmentation, obfuscation, and virtualization strategies for LLMs.

### Tech Stack
• Prompt injection and jailbreaking techniques  
• Adversarial perturbations (vision models)  
• Python, specialized security frameworks

### Lessons Learned
• Adversarial AI is a rapidly evolving field requiring constant vigilance and creativity.  
• Understanding AI vulnerabilities is key to building robust, secure models.

---

## 13. Church Volunteer Help Desk Service Response LLM 2.0 (December 2024)

### Overview
In the second phase of the Church Volunteer Help Desk Service Response LLM, I extended the proof-of-concept system to include a RAG workflow. Grounding model responses with accurate data sources significantly increased the help desk’s efficiency and reduced response time.

### Motivation
• Enhance the system’s factual correctness by retrieving relevant documents during inference.  
• Further refine brand-aligned communications while dynamically pulling up context-specific materials.

### What I Built
• Preprocessed internal church data using specialized chunking and embedding strategies.  
• Utilized OpenAI Text Embedding 3 Large stored in LanceDB as the vector database.  
• Deployed a Next.js frontend to handle user queries, combined with Azure OpenAI GPT-4 for responses.

### Key Achievements
• Improved user satisfaction by providing consistent, accurate replies grounded in real data.  
• Showcased seamless integration of multiple services (Next.js, LanceDB, MongoDB) with minimal latency.

### Tech Stack
• Next.js, NextAuth, MongoDB  
• FastAPI, LanceDB  
• Azure OpenAI GPT-4o  

### Lessons Learned
• Fine-tuning data chunking strategies can significantly improve retrieval performance.  
• Balancing privacy concerns with data accessibility is a constant challenge in real-world RAG systems.

---

# Final Thoughts

Through these projects, I’ve honed my skills in:
• Large Language Models (LLMs) — exploring prompt engineering, fine-tuning, and retrieval augmentation.  
• MLOps — establishing robust pipelines for model training, deployment, and inference.  
• Computer Vision — leveraging frameworks like TensorFlow Lite, OpenCV, and specialized tools for deepfakes and gesture recognition.  
• Full-Stack Development — from Next.js frontends to FastAPI or Node.js backends, ensuring smooth user experiences.

All these experiences strengthen my position as an aspiring Machine Learning Engineer passionate about generative AI, stable diffusion, and next-generation LLM technologies. I continue to stay closely connected with AI communities, hackathons, and research discussions, always seeking new frontiers in advanced AI development.