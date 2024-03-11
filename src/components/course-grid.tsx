import { HoverEffect } from "./ui/card-hover-grid";

export function CourseGrid() {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-black rounded-xl">
        <h1 className="text-white pt-6 text-xl text-center justify-center">Course Training Contents aligned to corporate giants.</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Machine Learning",
    description:(
        <ul className="list-disc">
        <li>A Refresher to Python</li>
        <li>Fundamentals & Categories of AI/ML/Data Science</li>
        <li>ML Tools/ Softwares</li>
        <li>Data Scrubbing</li>
        <li>Regression</li>
        <li>Classification</li>
        <li>Clustering</li>
        <li>Cost & Activation Functions</li>
      </ul>
      ),
    duration:"10-12 weeks"
  },
  {
    title: "Deep Learning",
    description:(
        <ul className="list-disc">
        <li>Deep Learning Concepts and Frameworks</li>
        <li>Data Preparation and Pre-processing</li>
        <li>Refresher to Artificial Neural Network (ANN)</li>
        <li>Convolution Neural Network (CNN)</li>
        <li>Recurrent Neural Network (RNN)</li>
        <li>Generative Adversarial Networks (GAN)</li>
        <li>Gated Recurrent Unit (GRU)</li>
        <li>LSTM</li>
        <li>NLP</li>
        <li>Words, Sentences, Word2Vec, Word Embeddings</li>
        <li>Hyper-Parameters, Parameters and fine tuning</li>
        <li>Tensorflow pipeline performance optimization</li>
        <li>Building Model- Live Project</li>
      </ul>
      ),
      duration:"10-12 weeks"
    },
  {
    title: "Generative AI and LLMs",
    description:(
        <ul className="list-disc">
        <li>Concepts of GPT-X</li>
        <li>GPT-X Architecture</li>
        <li>Word2Vec</li>
        <li>Tokens, Prompts, Vector Index</li>
        <li>Zero-shot, One-Shot and Few-Shot Learning</li>
        <li>BPE, WTE</li>
        <li>Multi-Head Casual Self-Attention</li>
        <li>Projection to Vocab</li>
        <li>Position-wise feed forward network</li>
        <li>PEFT, LoRA</li>
        <li>Llama and LangChain Overview</li>
        <li>Project Work- Live</li>
      </ul>
      ),
      duration:"10-12 weeks"
    }
];
