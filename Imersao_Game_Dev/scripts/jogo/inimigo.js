class Inimigo extends Animacao {
   constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velociade){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
     
     this.velocidade = velociade
     this.x = width
  }
  move() {
    this.x = this.x - this.velocidade
  }
  
  aparece() {
    this.x = width
  }
}