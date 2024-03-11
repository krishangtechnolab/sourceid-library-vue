<template>
  <div>
    <button @click="handleVerify" :style="buttonStyle">{{ text }}</button>
    <div
      v-if="showModal"
      ref="modalRef"
      @click="handleCloseModal"
      :style="modalStyle"
    >
      <iframe
        src="https://source-id-web-app-dev.vercel.app/"
        :style="innerElementStyle"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, CSSProperties } from "vue";

interface VerifyButtonProps {
  text?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  backgroundColor?: string;
  boxShadow?: string;
  border?: string;
  width?: string;
  height?: string;
  customStyle?: Partial<CSSProperties>;
  customModalStyle?: Partial<CSSProperties>;
  customInnerElementStyle?: Partial<CSSProperties>;
}

const props = defineProps<VerifyButtonProps>();
const showModal = ref<boolean>(false);
const modalRef = ref<HTMLDivElement | null>(null);

const handleVerify = () => {
  showModal.value = true;
};

const handleCloseModal = () => {
  showModal.value = false;
};

const defaultButtonStyle: Partial<CSSProperties> = {
  color: props.color || "white",
  padding: props.padding || "10px 20px",
  borderRadius: props.borderRadius || "5px",
  cursor: "pointer",
  fontSize: props.fontSize || "16px",
  backgroundColor: props.backgroundColor || "blue",
  boxShadow: props.boxShadow || "1px 2px 10px blue",
  border: props.border || "0",
  width: props.width || "auto",
  height: props.height || "auto",
};

const modalStyle: Partial<CSSProperties> = {
  display: "flex",
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "999999",
  justifyContent: "center",
  alignItems: "center",
  ...props.customModalStyle,
};

const innerElementStyle: Partial<CSSProperties> = {
  width: "90%",
  height: "90%",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 1)",
  ...props.customInnerElementStyle,
};

const buttonStyle: Partial<CSSProperties> = {
  ...defaultButtonStyle,
  ...props.customStyle,
};
</script>
