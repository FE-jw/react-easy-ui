/**
 * @jwook/react-ui 컴포넌트 생성 스크립트
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const componentName = await rl.question('생성할 컴포넌트명을 입력하세요: ');
  rl.close();

  if (!componentName || !/^[A-Z][A-Za-z0-9_]*$/.test(componentName)) {
    console.error('컴포넌트명은 대문자로 시작해야 하며 영문/숫자/_만 허용됩니다.');
    process.exit(1);
  }

  console.log('입력한 컴포넌트명:', componentName);

  const dirPath = join(__dirname, './../', 'src', 'components');
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }

  // 파일 경로
  const tsxPath = join(dirPath, `${componentName}.tsx`);
  const scssPath = join(dirPath, `${componentName}.module.scss`);
  const storyPath = join(dirPath, `${componentName}.stories.tsx`);

  // 템플릿
  const tsxTemplate = `'use client';

import React from 'react';
import style from './${componentName}.module.scss';

export interface ${componentName}Props {}

export default function ${componentName}() {
  return ( <></> );
}`;

  const scssTemplate = `.${componentName} {
  // ${componentName} 스타일 작성
}`;

  const storyTemplate = `import type { Meta, StoryObj } from '@storybook/react';
import ${componentName} from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
	children: '${componentName} 기본',
  },
};`;

  // 파일 생성
  writeFileSync(tsxPath, tsxTemplate, { encoding: 'utf8', flag: 'wx' });
  writeFileSync(scssPath, scssTemplate, { encoding: 'utf8', flag: 'wx' });
  writeFileSync(storyPath, storyTemplate, { encoding: 'utf8', flag: 'wx' });

  console.log(
    `${componentName}.tsx, ${componentName}.module.scss, and ${componentName}.stories.tsx have been created.`
  );
}

main();
