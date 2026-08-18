import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../data/quizData';

const divisionDetails = {
  office: {
    name: 'Office',
    desc: 'Kamu sangat terorganisir dan suka hal-hal administratif. Di divisi ini, kamu akan mengelola data, keuangan, dan memastikan semua kegiatan UKM berjalan lancar!',
    color: '#3B82F6' // blue-500
  },
  web: {
    name: 'Web Development',
    desc: 'Kamu suka tantangan logika dan teknologi. Di divisi ini, kamu akan belajar membangun website yang keren, interaktif, dan modern!',
    color: '#6366F1' // indigo-500
  },
  vcd: {
    name: 'Visual Communication Design',
    desc: 'Kamu memiliki jiwa seni yang tinggi dan sangat kreatif. Di divisi ini, kamu akan mengasah skill desain UI/UX, poster, hingga ilustrasi estetik!',
    color: '#EC4899' // pink-500
  },
  game: {
    name: 'Game Development',
    desc: 'Kamu penuh imajinasi dan suka berinovasi. Di divisi ini, kamu akan mewujudkan dunia impianmu menjadi game yang seru untuk dimainkan!',
    color: '#22C55E' // green-500
  }
};

const colors = [
  '#EF4444', // red-500
  '#3B82F6', // blue-500
  '#EAB308', // yellow-500
  '#22C55E'  // green-500
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    office: 0,
    web: 0,
    vcd: 0,
    game: 0
  });
  const [showResult, setShowResult] = useState(false);

  // Randomize options order for the current question so it's not always in the same order
  const currentOptions = useMemo(() => {
    if (showResult) return [];
    const options = [...quizQuestions[currentQuestion].options];
    return options.sort(() => Math.random() - 0.5);
  }, [currentQuestion, showResult]);

  const handleAnswerClick = (division) => {
    setScores((prev) => ({
      ...prev,
      [division]: prev[division] + 1
    }));

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendedDivision = () => {
    let maxScore = -1;
    let recommended = '';

    // In case of tie, the first one encountered will be picked, or we could handle ties.
    // For simplicity, we just pick the first max.
    for (const [division, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        recommended = division;
      }
    }
    return recommended;
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 bg-hitam text-putih flex flex-col items-center justify-center font-sans">

      {!showResult ? (
        <div className="w-full max-w-4xl w-navfot">
          {/* Progress Bar */}
          <div className="mb-8 w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
            <motion.div
              className="bg-secondary h-4"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="text-center mb-10">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Pertanyaan {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight"
              >
                {quizQuestions[currentQuestion].question}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
            <AnimatePresence mode="wait">
              {currentOptions.map((option, index) => (
                <motion.button
                  key={`${currentQuestion}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleAnswerClick(option.division)}
                  className="w-full text-left p-6 md:p-8 rounded-2xl shadow-lg transform transition-transform duration-200 active:scale-95 flex items-center justify-center hover:brightness-110"
                  style={{ backgroundColor: colors[index] }}
                >
                  <span className="text-xl md:text-2xl font-bold text-white text-center leading-snug">
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-gray-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-gray-800"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-300">Berdasarkan jawabanmu, kamu cocok masuk divisi:</h2>

          {(() => {
            const recommended = getRecommendedDivision();
            const divData = divisionDetails[recommended];

            return (
              <>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="my-8 p-6 rounded-2xl shadow-lg inline-block"
                  style={{ backgroundColor: divData.color }}
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                    {divData.name}
                  </h1>
                </motion.div>

                <p className="text-lg md:text-xl text-gray-400 mb-10 px-4">
                  {divData.desc}
                </p>
              </>
            );
          })()}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6nm4j9pOFA_agi2tHWJoE15lSt1CmpH9JXPEF5uVsgkRM8g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto bg-secondary hover:bg-primary text-white font-bold text-xl py-4 px-12 rounded-full shadow-[0_0_20px_rgba(102,126,234,0.5)] transition-all"
          >
            Daftar Sekarang
          </motion.a>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScores({ office: 0, web: 0, vcd: 0, game: 0 });
              setShowResult(false);
            }}
            className="block w-full text-center mt-6 text-gray-500 hover:text-white transition-colors underline"
          >
            Ulangi Kuis
          </button>
        </motion.div>
      )}

    </div>
  );
}
