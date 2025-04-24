import { useState } from "react";

interface AnimatedCircularProgressBarProps {
  max?: number;
  value: number;
  min?: number;
  gaugePrimaryColor: string;
  gaugeSecondaryColor: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  suffix?: string;
}

const AnimatedCircularProgressBar = ({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className,
  size = "md",
  showLabel = true,
  suffix = "%",
}: AnimatedCircularProgressBarProps) => {
  const circumference = 2 * Math.PI * 45;
  const percentPx = circumference / 100;
  const currentPercent = ((value - min) / (max - min)) * 100;

  const sizeClasses = {
    sm: "w-24 h-24 text-xl",
    md: "w-40 h-40 text-2xl",
    lg: "w-48 h-48 text-3xl",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} font-semibold ${className || ""}`}
      style={
        {
          "--circle-size": "100px",
          "--circumference": circumference,
          "--percent-to-px": `${percentPx}px`,
          "--gap-percent": "5",
          "--offset-factor": "0",
          "--transition-length": "1s",
          "--transition-step": "200ms",
          "--delay": "0s",
          "--percent-to-deg": "3.6deg",
          transform: "translateZ(0)",
        } as React.CSSProperties
      }
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <svg
        fill="none"
        className="w-full h-full"
        strokeWidth="2"
        viewBox="0 0 100 100"
      >
        {currentPercent <= 90 && currentPercent >= 0 && (
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-100"
            style={
              {
                stroke: gaugeSecondaryColor,
                "--stroke-percent": 90 - currentPercent,
                "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                strokeDasharray:
                  "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                transform:
                  "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                transition: "all var(--transition-length) ease var(--delay)",
                transformOrigin:
                  "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)",
              } as React.CSSProperties
            }
          />
        )}
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-100"
          style={
            {
              stroke: gaugePrimaryColor,
              "--stroke-percent": currentPercent,
              strokeDasharray:
                "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
              transition:
                "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
              transitionProperty: "stroke-dasharray,transform",
              transform:
                "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
              transformOrigin:
                "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)",
            } as React.CSSProperties
          }
        />
      </svg>
      {showLabel && (
        <span
          data-current-value={currentPercent}
          className="absolute inset-0 m-auto w-fit h-fit duration-[var(--transition-length)] delay-[var(--delay)] ease-linear"
          style={{
            animationName: "fade-in",
          }}
        >
          {Math.round(currentPercent)}
          {suffix}
        </span>
      )}
    </div>
  );
};

const ProgressVersion01 = () => {
  const [value, setValue] = useState(50);
  const [colorTheme, setColorTheme] = useState("indigo");

  const colorThemes = {
    indigo: {
      primary: "rgb(79 70 229)",
      secondary: "rgba(224, 223, 252, 0.3)",
      trackBg: "rgb(224, 223, 252)",
      text: "text-indigo-600",
      border: "border-indigo-600",
      bg: "bg-indigo-600",
    },
    rose: {
      primary: "rgb(225 29 72)",
      secondary: "rgba(254, 202, 202, 0.3)",
      trackBg: "rgb(254, 202, 202)",
      text: "text-rose-600",
      border: "border-rose-600",
      bg: "bg-rose-600",
    },
    emerald: {
      primary: "rgb(16 185 129)",
      secondary: "rgba(167, 243, 208, 0.3)",
      trackBg: "rgb(167, 243, 208)",
      text: "text-emerald-600",
      border: "border-emerald-600",
      bg: "bg-emerald-600",
    },
  };

  const selectedTheme = colorThemes[colorTheme as keyof typeof colorThemes];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColorTheme(e.target.value);
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">원형 프로그레스</h2>
        <p className="text-gray-400 mb-8">
          애니메이션 효과가 적용된 원형 프로그레스 바로, 다양한 크기와 테마를
          지원한다. 슬라이더를 조절하여 진행률을 변경해보자.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={value}
          gaugePrimaryColor={selectedTheme.primary}
          gaugeSecondaryColor={selectedTheme.secondary}
          size="lg"
        />

        <div className="flex flex-col space-y-4 self-center">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor={selectedTheme.primary}
            gaugeSecondaryColor={selectedTheme.secondary}
            size="sm"
          />

          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor={selectedTheme.primary}
            gaugeSecondaryColor={selectedTheme.secondary}
            size="sm"
            suffix=""
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="w-full p-4 bg-gray-700 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <label htmlFor="progress-value" className="text-lg font-medium">
              진행률 조절
            </label>
            <span
              className={`${selectedTheme.bg} text-white px-3 py-1 rounded-full text-sm font-medium`}
            >
              {value}%
            </span>
          </div>

          <div className="relative py-6">
            <div className="flex items-center justify-center h-5 relative">
              {/* 트랙 배경 */}
              <div
                className="absolute inset-x-0 h-1 rounded-full"
                style={{ backgroundColor: selectedTheme.trackBg }}
              ></div>

              {/* 트랙 진행 부분 */}
              <div
                className="absolute h-1 rounded-full left-0"
                style={{
                  backgroundColor: selectedTheme.primary,
                  width: `${value}%`,
                }}
              ></div>

              {/* 실제 입력 요소 */}
              <input
                id="progress-value"
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={handleInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={value}
                aria-label="프로그레스 값 조절"
              />

              {/* 썸네일 */}
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow pointer-events-none z-[1]`}
                style={{
                  left: `${value}%`,
                  transform: "translateX(-50%)",
                  borderColor: selectedTheme.primary,
                  borderWidth: "2px",
                }}
              ></div>
            </div>

            {/* 눈금 표시 */}
            <div className="flex justify-between w-full px-1 mt-4 text-xs text-gray-400">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-gray-700 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="theme-select"
              className="block text-lg font-medium mb-2"
            >
              테마 선택
            </label>
            <select
              id="theme-select"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={colorTheme}
              onChange={handleThemeChange}
            >
              <option value="indigo">인디고</option>
              <option value="rose">로즈</option>
              <option value="emerald">에메랄드</option>
            </select>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full mb-2"
                style={{ backgroundColor: selectedTheme.primary }}
              ></div>
              <span className="text-sm text-gray-300">주요 색상</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full mb-2"
                style={{ backgroundColor: selectedTheme.secondary }}
              ></div>
              <span className="text-sm text-gray-300">보조 색상</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full mb-2"
                style={{ backgroundColor: selectedTheme.trackBg }}
              ></div>
              <span className="text-sm text-gray-300">트랙 색상</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressVersion01;
