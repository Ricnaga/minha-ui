<script setup lang="ts">
import { Card } from '../';
import { CardHeader } from '../../CardHeader';
import { CardBody } from '../../CardBody';
import { CardActions } from '../../CardActions';
import { CardTitle } from '../../CardTitle';
import { CardSubtitle } from '../../CardSubtitle';
import { CardDescription } from '../../CardDescription';
import { CardFooter } from '../../CardFooter';
import { CardImage } from '../../CardImage';
import type { CardProps } from '../card.types';

defineProps<CardProps>();
</script>

<template>
  <Card v-bind="$attrs">
    <CardHeader>
      <CardTitle>Conteúdo do card title</CardTitle>
      <CardSubtitle>Conteúdo do card sub title</CardSubtitle>
    </CardHeader>
    <CardBody>
      <CardDescription>Conteúdo do card description</CardDescription>
      <div class="m-6">
        <CardImage
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Paisagem com montanhas e céu"
          class="size-20"
        />
      </div>
    </CardBody>
    <CardActions>
      <CardFooter>Conteúdo do card footer</CardFooter>
    </CardActions>
  </Card>
</template>
