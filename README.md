# Vue SourceID Verification Button

This Vue component allows you to integrate a verification button using the SourceID Verify library. It provides a simple method for users to verify their identity.

## Installation

```bash
npm install vue-sourceid-verify
or
yarn add vue-sourceid-verify

```

## Usage

Import the VerifyButton component into your Vue component:

```vue
<template>
  <VerifyButton
    text="verify"
    :padding="'20px'"
    :border="'0'"
    :fontSize="'20px'"
    :width="'200px'"
    :height="'auto'"
    :borderRadius="'5px'"
    :customStyle="{
      marginLeft: '40px',
      // Add any additional custom styles here
    }"
    :customModalStyle="{
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      // Add any additional custom modal styles here
    }"
    :customInnerElementStyle="{
      borderRadius: '10px',
      color: 'blue',
      fontWeight: 'bold',
      // Add any additional custom inner element styles here
    }"
  />
</template>

<script setup lang="ts">
import VerifyButton from "vue-sourceid-verify";
</script>
```
