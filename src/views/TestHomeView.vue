<script setup>
import IntroHero from '@/components/IntroHero.vue'
import StrategySection from '@/components/StrategySection.vue'
import ResearchSection from '@/components/ResearchSection.vue'
import DesignSection from '@/components/DesignSection.vue'
</script>

<template>
<main id="main-content" class="home">
        <!--chatbot code-->
    <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
<df-messenger
  project-id="snappy-frame-451217-g8"
  agent-id="bc04858e-07e3-47b8-8d25-c2a3866b687a"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="seans-portfolio-chatbot">
  </df-messenger-chat-bubble>
</df-messenger>
<style>
  df-messenger {
    z-index: 999;
    position: fixed;
    --df-messenger-font-color: #000;
    --df-messenger-font-family: Google Sans;
    --df-messenger-chat-background: #f3f6fc;
    --df-messenger-message-user-background: #d3e3fd;
    --df-messenger-message-bot-background: #fff;
    bottom: 16px;
    right: 16px;
  }
</style>

   <!--chatbot code-->
    <IntroHero />
    <StrategySection />
    <ResearchSection />
    <DesignSection />
  </main>
</template>
